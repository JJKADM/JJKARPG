import './Carteira.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import InventoryCard from '../../components/InventoryCard/InventoryCard'

function Carteira() {
	const navigate = useNavigate()

	const handleBack = () => {
		navigate(-1)
	}

	return (
		<div className="carteira">
			<Navbar />

			<main className="carteira__main">
				<button className="carteira__back" type="button" onClick={handleBack}>
					Voltar &lt;
				</button>
				<header className="carteira__header">
					<h1 className="carteira__title">Carteira</h1>
					<p className="carteira__subtitle">Aqui você visualiza seus itens e dinheiro.</p>
				</header>

				<section className="carteira__content">
					<div className="carteira__panel">
						<h2 className="carteira__panel-title">Carteira</h2>
						<div className="carteira__wallet" aria-label="Saldo do jogador">
							<div className="carteira__wallet-top">
								<span className="carteira__wallet-chip" aria-hidden="true" />
								<span className="carteira__wallet-label">Saldo</span>
							</div>
							<div className="carteira__wallet-amount">R$ 0</div>
							<div className="carteira__wallet-note">JJKBanks SA.</div>
						</div>
					</div>

					<div className="carteira__panel">
						<h2 className="carteira__panel-title">Meu Inventário</h2>
						<div className="carteira__inventory" aria-label="Inventário do jogador">
							<InventoryCard
								title="Espada de Hades"
								description="Lâmina ancestral forjada nas trevas."
							/>
							<InventoryCard
								title="Minas de Kaique"
								description="Explosivos artesanais com alto impacto."
							/>
							<InventoryCard
								title="Chule de Pedro"
								description="Item lendário do Pedro."
								imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3FHlpRU5y0QHeYPveD4O3qvmn2fxZwxqag&s"
							/>
							<InventoryCard
								title="Richard Cria"
								description="Item de teste do inventário."
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Carteira
