import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <div className="navbar__logo-box">logo</div>
        <span className="navbar__brand-name">Escola Técnica Jujutsu</span>
      </div>

      <div className="navbar__user">
        <div className="navbar__user-info">
          <span className="navbar__user-name">Nome do aluno</span>
          <span className="navbar__user-school">Escola de Kyoto</span>
        </div>
        <div className="navbar__divider" />
        <a href="#" className="navbar__link">
          <img src="../whatsapp-svgrepo-com.svg" alt="WhatsApp" />
        </a>
        <button className="navbar__menu" aria-label="Abrir menu">menu</button>
        <button className="navbar__avatar">foto</button>
      </div>
    </header>
  )
}

export default Navbar
