import './Register.css'

function Register() {
  return (
    <div className="register">
      <div className="register__card">
        <div className="register__title-box">Nome do rpg</div>
        <h1 className="register__title">Registro</h1>
        <form>
          <div className="register__field">
            <label htmlFor="register-nome">Insira seu nome</label>
            <input id="register-nome" type="text" />
          </div>
          <div className="register__field">
            <label htmlFor="register-senha">Senha</label>
            <input id="register-senha" type="password" />
          </div>
          <div className="register__field">
            <label className="register__hint" htmlFor="register-senha-confirm">
              (Não use uma senha importante!!)
            </label>
            <label htmlFor="register-senha-confirm">Confirmar Senha</label>
            <input id="register-senha-confirm" type="password" />
          </div>
          <div className="register__field">
            <label htmlFor="register-associacao">Associação</label>
            <select id="register-associacao">
              <option value="">Text List</option>
              <option value="kyoto">Kyoto</option>
              <option value="tokyo">Tokyo</option>
              <option value="outsider">Outsider</option>
            </select>
          </div>
          <button className="register__button" type="submit">Registrar</button>
        </form>
        <a className="register__link" href="/login">Já tem acesso?</a>
      </div>
    </div>
  )
}

export default Register
