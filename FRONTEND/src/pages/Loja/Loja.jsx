import './Loja.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import LojaCarrossel from '../../components/LojaCarrossel/LojaCarrossel'

function Loja() {
	const navigate = useNavigate()
	const produtosGrau4 = [
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 12,
		},
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 8,
		},
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 20,
		},
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 3,
		},
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 5,
		},
	]
	const produtosGrau3 = [
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 14,
		},
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 30,
		},
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 9,
		},
		{
			title: 'Produto',
			price: 'R$ 10,00',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium ornare nibh sit amet lacinia integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris.',
			stock: 18,
		},
	]

	const handleBack = () => {
		navigate(-1)
	}

	return (
		<div className="loja">
			<Navbar />

			<main className="loja__main">
				<button className="loja__back" type="button" onClick={handleBack}>
					Voltar &lt;
				</button>

				<header className="loja__header">
					<div>
						<h1 className="loja__title">Loja</h1>
						<p className="loja__subtitle">Escolha seus itens e upgrades.</p>
					</div>
					<div className="loja__saldo" aria-label="Saldo do jogador">
						<span className="loja__saldo-label">Saldo</span>
						<span className="loja__saldo-amount">R$ 0</span>
					</div>
				</header>

				<section className="loja__content">
					<LojaCarrossel title="Produtos grau 4" items={produtosGrau4} />
					<LojaCarrossel title="Produtos grau 3" items={produtosGrau3} />
				</section>
			</main>
		</div>
	)
}

export default Loja
