import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen((open) => !open)

  useEffect(() => {
    if (!isMenuOpen) return

    const handlePointerDown = (event) => {
      const menuEl = menuRef.current
      const buttonEl = menuButtonRef.current
      if (!menuEl || !buttonEl) return

      const target = event.target
      if (menuEl.contains(target) || buttonEl.contains(target)) {
        return
      }

      setIsMenuOpen(false)
    }

    const handlePopState = () => {
      setIsMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isMenuOpen])

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
        <button
          className="navbar__menu"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-mobile-menu"
          onClick={toggleMenu}
          type="button"
          ref={menuButtonRef}
        >
          M
        </button>
        <button className="navbar__avatar">foto</button>
      </div>

      <div
        id="navbar-mobile-menu"
        className={`navbar__mobile-menu${isMenuOpen ? ' navbar__mobile-menu--open' : ''}`}
        ref={menuRef}
      >
        <div className="navbar__mobile-avatar">foto</div>
        <button className="navbar__mobile-item" type="button">Meu perfil</button>
        <button className="navbar__mobile-item" type="button">Carteira</button>
        <button className="navbar__mobile-item" type="button">
          Lista de usuários (somente adms)
        </button>
        <a className="navbar__mobile-wpp" href="#" aria-label="WhatsApp">
          <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" />
        </a>
      </div>
    </header>
  )
}

export default Navbar
