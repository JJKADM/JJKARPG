import './Login.css'

function Login() {
	return (
		<div className="login">
			<div className="login__card">
				<div className="login__title-box">Nome do rpg</div>
				<h1 className="login__title">Login</h1>
				<form>
					<div className="login__field">
						<label htmlFor="login-usuario">Nome de usuário</label>
						<input id="login-usuario" type="text" />
					</div>
					<div className="login__field">
						<label htmlFor="login-senha">Senha</label>
						<input id="login-senha" type="password" />
					</div>
					<button className="login__button" type="submit">Iniciar sessão</button>
				</form>
				<a className="login__link" href="/register">Não tem acesso?</a>
			</div>
		</div>
	)
}

export default Login
