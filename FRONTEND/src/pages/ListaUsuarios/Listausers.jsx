import './Listausers.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function Listausers() {
	const navigate = useNavigate()
	const users = [
		{
			id: 'usuario-1',
			name: 'Nome do aluno',
			city: 'Tokyo',
			image:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
		},
		{
			id: 'usuario-2',
			name: 'Nome do aluno',
			city: 'Kyoto',
			image:
				'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
		},
		{
			id: 'usuario-3',
			name: 'Nome do aluno',
			city: 'Streets',
			image:
				'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop',
		},
	]

	return (
		<div className="listausers">
			<Navbar />

			<main className="listausers__main">
				<button className="listausers__back" type="button" onClick={() => navigate(-1)}>
					Voltar &lt;
				</button>
				<header className="listausers__header">
					<h1 className="listausers__title">Lista de usuários</h1>
					<p className="listausers__subtitle">Gerencie e visualize todos os alunos.</p>
				</header>

				<ul className="listausers__list">
					{users.map((user) => (
						<li key={user.id} className="listausers__item">
							<button
								className="listausers__button"
								type="button"
								onClick={() => navigate('/perfil', { state: user })}
							>
								<img className="listausers__avatar" src={user.image} alt={user.name} />
								<div className="listausers__info">
									<h2 className="listausers__name">{user.name}</h2>
									<span className="listausers__tag">{user.city}</span>
								</div>
							</button>
						</li>
					))}
				</ul>
			</main>
		</div>
	)
}

export default Listausers
