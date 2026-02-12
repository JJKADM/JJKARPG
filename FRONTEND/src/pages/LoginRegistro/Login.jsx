import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Login.css'
import { isSupabaseConfigured, supabase } from '../../lib/supabaseClient'

function Login() {
	const navigate = useNavigate()
	const location = useLocation()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [status, setStatus] = useState(() => {
		const successMessage = location.state?.successMessage
		return successMessage
			? { type: 'success', message: successMessage }
			: { type: '', message: '' }
	})

	const handleSubmit = async (event) => {
		event.preventDefault()
		setStatus({ type: '', message: '' })

		if (!isSupabaseConfigured || !supabase) {
			setStatus({ type: 'error', message: 'Supabase não configurado.' })
			return
		}

		if (!username || !password) {
			setStatus({ type: 'error', message: 'Preencha usuário e senha.' })
			return
		}

		const email = `${username.trim().toLowerCase()}@jjk.local`

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})

		if (error) {
			setStatus({ type: 'error', message: error.message })
			return
		}

		setStatus({ type: 'success', message: 'Login realizado com sucesso.' })
		navigate('/home')
	}

	return (
		<div className="login">
			<div className="login__card">
				<div className="login__title-box">Nome do rpg</div>
				<h1 className="login__title">Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="login__field">
						<label htmlFor="login-usuario">Nome de usuário</label>
						<input
								id="login-usuario"
								type="text"
								value={username}
								onChange={(event) => setUsername(event.target.value)}
							required
						/>
					</div>
					<div className="login__field">
						<label htmlFor="login-senha">Senha</label>
						<input
							id="login-senha"
							type="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							required
						/>
					</div>
					{status.message && (
						<p
							className="login__status"
							style={{ color: status.type === 'error' ? '#b91c1c' : '#166534' }}
						>
							{status.message}
						</p>
					)}
					<button className="login__button" type="submit">Iniciar sessão</button>
				</form>
				<a className="login__link" href="/register">Não tem acesso?</a>
			</div>
		</div>
	)
}

export default Login
