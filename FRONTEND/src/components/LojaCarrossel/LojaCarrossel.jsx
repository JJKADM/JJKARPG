import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LojaCard from '../LojaCard/LojaCard'
import './LojaCarrossel.css'

function LojaCarrossel({
	title = 'Produtos',
	items = [],
	visibleCount = 3,
	mobileVisibleCount = 1,
	mobileBreakpoint = 720,
}) {
	const [currentVisibleCount, setCurrentVisibleCount] = useState(visibleCount)
	const safeVisibleCount = Math.max(1, currentVisibleCount)
	const [startIndex, setStartIndex] = useState(0)
	const [isAnimatingNext, setIsAnimatingNext] = useState(false)
	const [isAnimatingPrev, setIsAnimatingPrev] = useState(false)
	const animationDuration = 240
	const normalizedItems = useMemo(() => (Array.isArray(items) ? items : []), [items])
	const canScroll = normalizedItems.length > safeVisibleCount
	const navigate = useNavigate()

	useEffect(() => {
		if (typeof window === 'undefined' || !window.matchMedia) {
			return
		}

		const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`)

		const updateCount = () => {
			setCurrentVisibleCount(mediaQuery.matches ? mobileVisibleCount : visibleCount)
		}

		updateCount()
		mediaQuery.addEventListener('change', updateCount)

		return () => {
			mediaQuery.removeEventListener('change', updateCount)
		}
	}, [mobileBreakpoint, mobileVisibleCount, visibleCount])

	const visibleItems = useMemo(() => {
		if (!normalizedItems.length) {
			return []
		}

		const result = []
		for (let i = 0; i < safeVisibleCount; i += 1) {
			const index = (startIndex + i) % normalizedItems.length
			result.push(normalizedItems[index])
		}
		return result
	}, [normalizedItems, safeVisibleCount, startIndex])

	const handlePrev = () => {
		if (!canScroll) return
		setIsAnimatingPrev(true)
		setStartIndex((current) => (current - 1 + normalizedItems.length) % normalizedItems.length)
		window.setTimeout(() => setIsAnimatingPrev(false), animationDuration)
	}

	const handleNext = () => {
		if (!canScroll) return
		setIsAnimatingNext(true)
		setStartIndex((current) => (current + 1) % normalizedItems.length)
		window.setTimeout(() => setIsAnimatingNext(false), animationDuration)
	}

	return (
		<section className="loja-carousel">
			<div className="loja-carousel__header">
				<h2 className="loja-carousel__title">{title}</h2>
			</div>
			<div className="loja-carousel__row">
				<button
					className="loja-carousel__nav-btn"
					type="button"
					onClick={handlePrev}
					disabled={!canScroll}
				>
					&lt;
				</button>
				<div
					className={`loja-carousel__track${
						isAnimatingNext ? ' loja-carousel__track--next' : ''
					}${isAnimatingPrev ? ' loja-carousel__track--prev' : ''}`}
				>
					{visibleItems.map((item, index) => (
						<LojaCard
							key={`${item.title || 'item'}-${index}`}
							title={item.title}
							price={item.price}
							imageSrc={item.imageSrc}
							onClick={() => navigate('/loja/produto', { state: item })}
						/>
					))}
				</div>
				<button
					className="loja-carousel__nav-btn"
					type="button"
					onClick={handleNext}
					disabled={!canScroll}
				>
					&gt;
				</button>
			</div>
		</section>
	)
}

export default LojaCarrossel
