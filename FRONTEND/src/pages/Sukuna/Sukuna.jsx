import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Sukuna.css'
import Navbar from '../../components/Navbar/Navbar'

function Sukuna() {
	const navigate = useNavigate()
	const [attempts, setAttempts] = useState([])
	const [isSpinning, setIsSpinning] = useState(false)
	const [rotation, setRotation] = useState(0)
	const attemptsSinceLastWin = (() => {
		const winIndex = attempts.findIndex((attempt) => attempt.result === 'Sucesso')
		return winIndex === -1 ? attempts.length : winIndex
	})()
	const winsCount = attempts.filter((attempt) => attempt.result === 'Sucesso').length
	const totalAttempts = attempts.length

	const handleTry = () => {
		if (isSpinning) return
		setIsSpinning(true)
		const playerName = 'Jogador'
		const win = Math.random() < 1 / 25
		const winSlice = 360 / 25
		const targetAngle = win
			? Math.random() * winSlice
			: winSlice + Math.random() * (360 - winSlice)
		setRotation((prev) => {
			const currentAngle = ((prev % 360) + 360) % 360
			const delta = (targetAngle - currentAngle + 360) % 360
			return prev + 1440 + delta
		})
		const now = new Date()
		const result = win ? 'Sucesso' : 'Falhou'
		const entry = {
			id: `${now.getTime()}-${Math.random().toString(16).slice(2)}`,
			name: playerName,
			result,
			time: now.toLocaleString('pt-BR'),
		}
		window.setTimeout(() => {
			setAttempts((prev) => [entry, ...prev])
			setIsSpinning(false)
		}, 2000)
	}

	const handleBack = () => {
		navigate(-1)
	}

	return (
		<div className="sukuna">
			<Navbar />
			<main className="sukuna__main">
				<header className="sukuna__header">
					<button className="sukuna__back" type="button" onClick={handleBack}>
						Voltar
					</button>
					<h1 className="sukuna__title">Hospedeiro Sukuna</h1>
					<p className="sukuna__subtitle">
						Tente sua sorte para se tornar o hospedeiro. Chance: 1 em 25.
					</p>
				</header>

				<section className="sukuna__panel">
					<div className="sukuna__form">
						<div className="sukuna__roulette">
							<div className="sukuna__roulette-pointer" />
							<div
								className={`sukuna__roulette-wheel${isSpinning ? ' sukuna__roulette-wheel--spin' : ''}`}
								style={{ transform: `rotate(${rotation}deg)` }}
							>
								<div className="sukuna__roulette-center" />
							</div>
						</div>
						<div className="sukuna__legend">
							<span className="sukuna__legend-item">
								<span className="sukuna__legend-swatch sukuna__legend-swatch--win" />
								Vitória
							</span>
							<span className="sukuna__legend-item">
								<span className="sukuna__legend-swatch sukuna__legend-swatch--lose" />
								Morte
							</span>
						</div>
						<button className="sukuna__button" type="button" onClick={handleTry}>
							Tentar ser hospedeiro
						</button>
					</div>
				</section>

				<section className="sukuna__list">
					<div className="sukuna__list-header">
						<h2 className="sukuna__list-title">Tentativas</h2>
						<span className="sukuna__stat">
							Tentativas desde a última vitória: {attemptsSinceLastWin}
						</span>
						<span className="sukuna__stat">
							Número de vitórias: {winsCount}
						</span>
						<span className="sukuna__stat">
							Tentativas totais já feitas: {totalAttempts}
						</span>
					</div>
					{attempts.length === 0 ? (
						<p className="sukuna__empty">Ainda não há tentativas registradas.</p>
					) : (
						<ul className="sukuna__items">
							{attempts.map((attempt) => (
								<li key={attempt.id} className="sukuna__item">
									<span className="sukuna__item-name">{attempt.name}</span>
									<span
										className={`sukuna__item-result${
											attempt.result === 'Sucesso'
												? ' sukuna__item-result--win'
												: ' sukuna__item-result--fail'
										}`}
									>
										{attempt.result}
									</span>
									<span className="sukuna__item-time">{attempt.time}</span>
								</li>
							))}
						</ul>
					)}
				</section>
			</main>
		</div>
	)
}

export default Sukuna
