import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Sukuna.css'
import Navbar from '../../components/Navbar/Navbar'

const IDLE_IMAGE = 'https://i.pinimg.com/736x/7f/09/78/7f0978e05b8e6e6ffd34ccac18cbabd0.jpg'
const LOSE_IMAGE_ONE = 'https://i.pinimg.com/736x/6f/a1/93/6fa193352f791563bda491263d7b2535.jpg'
const LOSE_IMAGE_TWO = 'https://i.pinimg.com/736x/00/51/de/0051de2cac4ae5969516ac881f898743.jpg'
const WIN_VIDEO_TWO = '/won2.mp4'

function Sukuna() {
	const navigate = useNavigate()
	const [attempts, setAttempts] = useState([])
	const [isSpinning, setIsSpinning] = useState(false)
	const [isStarting, setIsStarting] = useState(false)
	const [isEnding, setIsEnding] = useState(false)
	const [isWinEnding, setIsWinEnding] = useState(false)
	const [showWinOverlay, setShowWinOverlay] = useState(false)
	const [loseStage, setLoseStage] = useState(0)
	const [winStage, setWinStage] = useState(0)
	const [videoKey, setVideoKey] = useState(0)
	const hasSlowedRef = useRef(false)
	const pendingResultRef = useRef(null)
	const laughAudioRef = useRef(null)
	const slowFromSeconds = 3
	const slowPlaybackRate = 0.7
	const winVideoPlaybackRate = 0.75
	const loseImageDuration = 1500
	const fadeDuration = 600
	const isInSequence = isStarting || isSpinning || isEnding || loseStage > 0 || winStage > 0

	const attemptsSinceLastWin = (() => {
		const winIndex = attempts.findIndex((attempt) => attempt.result === 'Sucesso')
		return winIndex === -1 ? attempts.length : winIndex
	})()
	const winsCount = attempts.filter((attempt) => attempt.result === 'Sucesso').length
	const totalAttempts = attempts.length

	const finalizeAttempt = () => {
		const pending = pendingResultRef.current
		if (!pending) return
		const { entry } = pending
		setAttempts((prev) => [entry, ...prev])
		setIsSpinning(false)
		pendingResultRef.current = null
	}

	const handleVideoEnded = () => {
		const pending = pendingResultRef.current
		if (!pending) {
			setIsSpinning(false)
			return
		}
		const { win } = pending
		setIsEnding(true)
		setIsWinEnding(win)
		if (!win) {
			setLoseStage(1)
		}
		window.setTimeout(() => {
			setIsEnding(false)
			setIsWinEnding(false)
			finalizeAttempt()
			if (!win) {
				window.setTimeout(() => {
					setLoseStage(2)
					window.setTimeout(() => {
						setLoseStage(0)
					}, loseImageDuration)
				}, loseImageDuration)
			} else {
				setWinStage(2)
			}
		}, fadeDuration)
	}

	const handleTry = () => {
		if (isSpinning || isStarting || isEnding || loseStage > 0 || winStage > 0) return
		setIsSpinning(true)
		setIsStarting(true)
		setVideoKey((prev) => prev + 1)
		hasSlowedRef.current = false
		const playerName = 'Jogador'
		const win = Math.random() < 1 / 20
		const now = new Date()
		const result = win ? 'Sucesso' : 'Falhou'
		const entry = {
			id: `${now.getTime()}-${Math.random().toString(16).slice(2)}`,
			name: playerName,
			result,
			time: now.toLocaleString('pt-BR'),
		}
		pendingResultRef.current = { entry, win }
		window.setTimeout(() => {
			setIsStarting(false)
		}, fadeDuration)
	}

	const handleVideoTimeUpdate = (event) => {
		if (hasSlowedRef.current) return
		const currentTime = event.currentTarget.currentTime
		if (currentTime >= slowFromSeconds) {
			event.currentTarget.playbackRate = slowPlaybackRate
			hasSlowedRef.current = true
		}
	}

	const handleBack = () => {
		navigate(-1)
	}

	const handleWinVideoPlay = () => {
		if (!laughAudioRef.current) return
		laughAudioRef.current.currentTime = 0
		laughAudioRef.current.play().catch(() => {})
	}

	const handleWinVideoEnded = () => {
		setWinStage(0)
		setShowWinOverlay(true)
	}

	const handleCloseWinOverlay = () => {
		setShowWinOverlay(false)
	}

	return (
		<div className="sukuna">
			{showWinOverlay ? (
				<div className="sukuna__overlay" aria-hidden="true">
					<div className="sukuna__overlay-content">
						<img className="sukuna__overlay-eye sukuna__overlay-eye--c" src="/suk.jpg" alt="" />
						<div className="sukuna__overlay-text">Você sobreviveu, parabéns</div>
						<button
							className="sukuna__overlay-button"
							type="button"
							onClick={handleCloseWinOverlay}
						>
							Obrigado.
						</button>
					</div>
					<img className="sukuna__overlay-eye sukuna__overlay-eye--tl" src="/eyes.png" alt="" />
					<img className="sukuna__overlay-eye sukuna__overlay-eye--tr" src="/eyes.png" alt="" />
					<img className="sukuna__overlay-eye sukuna__overlay-eye--bl" src="/eyes.png" alt="" />
					<img className="sukuna__overlay-eye sukuna__overlay-eye--br" src="/eyes.png" alt="" />
				</div>
			) : null}
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
						<audio ref={laughAudioRef} src="/laught.mp3" preload="auto" />
						<div className="sukuna__gif-wrapper">
							<img
								className={`sukuna__media sukuna__media--idle${
									isInSequence ? ' is-hidden' : ''
								}`}
								src={IDLE_IMAGE}
								alt="Imagem de roleta"
							/>
							<div
								className={`sukuna__media sukuna__media--black${
									isInSequence ? ' is-active' : ''
								}${isEnding && isWinEnding ? ' sukuna__media--fade-in' : ''}`}
							/>
							{isSpinning ? (
								<video
									key={videoKey}
									className={`sukuna__media sukuna__media--play${
										isStarting ? ' sukuna__media--fade-in' : ''
									}${isEnding ? ' sukuna__media--fade-out' : ''}`}
									src="/itadori.mp4"
									autoPlay
									playsInline
									onTimeUpdate={handleVideoTimeUpdate}
									onEnded={handleVideoEnded}
								/>
							) : null}
							{isEnding && !isWinEnding ? (
								<img
									className="sukuna__media sukuna__media--fade-in"
									src={loseStage > 0 ? LOSE_IMAGE_ONE : IDLE_IMAGE}
									alt="Transição"
								/>
							) : null}
							{!isSpinning && loseStage > 0 && !isEnding && winStage === 0 ? (
								<div className="sukuna__gif-sequence">
									<img
										className={`sukuna__media sukuna__media--lose sukuna__media--lose-first${
											loseStage === 1 ? ' is-visible' : ''
										}`}
										src={LOSE_IMAGE_ONE}
										alt="Resultado de falha"
									/>
									<img
										className={`sukuna__media sukuna__media--lose sukuna__media--lose-second${
											loseStage === 2 ? ' is-visible' : ''
										}`}
										src={LOSE_IMAGE_TWO}
										alt="Resultado de falha"
									/>
								</div>
							) : null}
							{!isSpinning && winStage === 2 && !isEnding && loseStage === 0 ? (
								<div className="sukuna__gif-sequence">
									<video
										className="sukuna__media sukuna__media--win sukuna__media--win-video"
										src={WIN_VIDEO_TWO}
										autoPlay
										playbackRate={winVideoPlaybackRate}
										playsInline
										onPlay={handleWinVideoPlay}
										onEnded={handleWinVideoEnded}
									/>
								</div>
							) : null}
						</div>
						<button
							className="sukuna__button"
							type="button"
							onClick={handleTry}
							disabled={isSpinning || isStarting || isEnding || loseStage > 0 || winStage > 0}
						>
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
						<span className="sukuna__stat">Número de vitórias: {winsCount}</span>
						<span className="sukuna__stat">Tentativas totais já feitas: {totalAttempts}</span>
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
