import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import { isSupabaseConfigured, supabase } from '../../lib/supabaseClient'

function Register() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [associacao, setAssociacao] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    if (!isSupabaseConfigured || !supabase) {
      setStatus({ type: 'error', message: 'Supabase não configurado.' })
      return
    }

    if (!nome || !username || !password) {
      setStatus({ type: 'error', message: 'Preencha todos os campos.' })
      return
    }

    if (password !== confirmPassword) {
      setStatus({ type: 'error', message: 'As senhas não coincidem.' })
      return
    }

    const localizacaoMap = {
      kyoto: 1,
      tokyo: 2,
      outsider: 3,
    }

    const localizacao = localizacaoMap[associacao] ?? 1

    const email = `${username.trim().toLowerCase()}@jjk.local`

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nome,
          localizacao,
        },
      },
    })

    if (signUpError) {
      setStatus({ type: 'error', message: signUpError.message })
      return
    }

    if (!data?.user?.id) {
      setStatus({
        type: 'error',
        message: 'Não foi possível obter o usuário. Verifique o email de confirmação.',
      })
      return
    }

    setStatus({
      type: 'success',
      message: 'Conta criada com sucesso. Faça login para continuar.',
    })
    navigate('/login')
  }

  return (
    <div className="register">
      <div className="register__card">
        <div className="register__title-box">Nome do rpg</div>
        <h1 className="register__title">Registro</h1>
        <form onSubmit={handleSubmit}>
          <div className="register__field">
            <label htmlFor="register-nome">Insira seu nome</label>
            <input
              id="register-nome"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />
          </div>
          <div className="register__field">
            <label htmlFor="register-usuario">Nome de usuário</label>
            <input
              id="register-usuario"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="register__field">
            <label htmlFor="register-senha">Senha</label>
            <input
              id="register-senha"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="register__field">
            <label className="register__hint" htmlFor="register-senha-confirm">
              (Não use uma senha importante!!)
            </label>
            <label htmlFor="register-senha-confirm">Confirmar Senha</label>
            <input
              id="register-senha-confirm"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
          <div className="register__field">
            <label htmlFor="register-associacao">Associação</label>
            <select
              id="register-associacao"
              value={associacao}
              onChange={(event) => setAssociacao(event.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="kyoto">Kyoto</option>
              <option value="tokyo">Tokyo</option>
              <option value="outsider">Outsider</option>
            </select>
          </div>
          {status.message && (
            <p
              className="register__status"
              style={{ color: status.type === 'error' ? '#b91c1c' : '#166534' }}
            >
              {status.message}
            </p>
          )}
          <button className="register__button" type="submit">Registrar</button>
        </form>
        <a className="register__link" href="/login">Já tem acesso?</a>
      </div>
    </div>
  )
}

export default Register
