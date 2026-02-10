import { useEffect, useRef, useState } from 'react'
import './Perfil.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function Perfil() {
	const navigate = useNavigate()
	const { state } = useLocation()
	const [coverPreview, setCoverPreview] = useState(null)
	const [avatarPreview, setAvatarPreview] = useState(null)
	const coverInputRef = useRef(null)
	const avatarInputRef = useRef(null)
	const isAdmin = true

	useEffect(() => {
		return () => {
			if (coverPreview) URL.revokeObjectURL(coverPreview)
			if (avatarPreview) URL.revokeObjectURL(avatarPreview)
		}
	}, [coverPreview, avatarPreview])

	const handleCoverClick = () => {
		coverInputRef.current?.click()
	}

	const handleAvatarClick = () => {
		avatarInputRef.current?.click()
	}

	const handleCoverChange = (event) => {
		const file = event.target.files?.[0]
		if (!file) return
		if (coverPreview) URL.revokeObjectURL(coverPreview)
		setCoverPreview(URL.createObjectURL(file))
	}

	const handleAvatarChange = (event) => {
		const file = event.target.files?.[0]
		if (!file) return
		if (avatarPreview) URL.revokeObjectURL(avatarPreview)
		setAvatarPreview(URL.createObjectURL(file))
	}

	const handleBack = () => {
		navigate(-1)
	}

	return (
		<div className="perfil">
			<Navbar />

			<main className="perfil__main">
				<section className="perfil__hero">
					<button className="perfil__edit" type="button" onClick={handleCoverClick}>
						✎
					</button>
					<input
						ref={coverInputRef}
						type="file"
						accept="image/*"
						onChange={handleCoverChange}
						className="perfil__file"
						aria-label="Selecionar capa"
					/>
					<img
						className="perfil__cover"
						src={
							coverPreview ||
							'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop'
						}
						alt="Capa do perfil"
					/>
					<button className="perfil__avatar" type="button" onClick={handleAvatarClick}>
						{avatarPreview ? (
							<img src={avatarPreview} alt="Foto do perfil" />
						) : (
							'foto'
						)}
					</button>
					<input
						ref={avatarInputRef}
						type="file"
						accept="image/*"
						onChange={handleAvatarChange}
						className="perfil__file"
						aria-label="Selecionar foto do perfil"
					/>
				</section>

				<section className="perfil__info">
					<button className="perfil__back" type="button" onClick={handleBack}>
						Voltar
					</button>
					<h1 className="perfil__name">{state?.name || 'Nome do aluno'}</h1>
					<p className="perfil__label">Instituição:</p>
					<select
						className="perfil__select"
						name="instituicao"
						defaultValue={state?.city?.toLowerCase() || 'kyoto'}
					>
						<option value="kyoto">Kyoto</option>
						<option value="tokyo">Tokyo</option>
						<option value="streets">Streets</option>
						<option value="outsider">Outsider</option>
					</select>
				</section>

				{isAdmin && (
					<section className="perfil__admin">
						<h2 className="perfil__admin-title">Painel do administrador</h2>
						<p className="perfil__admin-subtitle">
							Gerencie itens e saldo do usuário selecionado.
						</p>
						<div className="perfil__admin-grid">
							<div className="perfil__admin-card">
								<h3>Itens do usuário</h3>
								<ul className="perfil__list">
									<li>Item 1 <button type="button">Remover</button></li>
									<li>Item 2 <button type="button">Remover</button></li>
									<li>Item 3 <button type="button">Remover</button></li>
								</ul>
							</div>
							<div className="perfil__admin-card">
								<h3>Saldo do usuário</h3>
								<div className="perfil__saldo">
									<span>R$</span>
									<strong>15,60</strong>
								</div>
								<label className="perfil__label" htmlFor="perfil-admin-valor">
									Valor
								</label>
								<input id="perfil-admin-valor" className="perfil__input" type="text" />
								<div className="perfil__admin-actions">
									<button type="button">Adicionar</button>
									<button type="button">Subtrair</button>
								</div>
							</div>
						</div>
					</section>
				)}
			</main>
		</div>
	)
}

export default Perfil
