import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  const desktopMenuRef = useRef(null)
  const desktopMenuButtonRef = useRef(null)
  const navigate = useNavigate()

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const toggleDesktopMenu = () => setIsDesktopMenuOpen((open) => !open)
  const handleGoToCarteira = () => {
    setIsMenuOpen(false)
    setIsDesktopMenuOpen(false)
    navigate('/carteira')
  }
  const handleGoToPerfil = () => {
    setIsMenuOpen(false)
    setIsDesktopMenuOpen(false)
    navigate('/perfil')
  }
  const handleGoToListaUsuarios = () => {
    setIsMenuOpen(false)
    setIsDesktopMenuOpen(false)
    navigate('/usuarios')
  }
  const handleGoHome = () => {
    setIsMenuOpen(false)
    setIsDesktopMenuOpen(false)
    navigate('/')
  }

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

  useEffect(() => {
    if (!isDesktopMenuOpen) return

    const handlePointerDown = (event) => {
      const menuEl = desktopMenuRef.current
      const buttonEl = desktopMenuButtonRef.current
      if (!menuEl || !buttonEl) return

      const target = event.target
      if (menuEl.contains(target) || buttonEl.contains(target)) {
        return
      }

      setIsDesktopMenuOpen(false)
    }

    const handlePopState = () => {
      setIsDesktopMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isDesktopMenuOpen])

  return (
    <header className="navbar">
      <button className="navbar__brand" type="button" onClick={handleGoHome}>
        <div className="navbar__logo-box">logo</div>
        <span className="navbar__brand-name">Escola Técnica Jujutsu</span>
      </button>

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
        <button
          className="navbar__avatar"
          type="button"
          aria-label="Abrir menu do usuário"
          aria-expanded={isDesktopMenuOpen}
          aria-controls="navbar-desktop-menu"
          onClick={toggleDesktopMenu}
          ref={desktopMenuButtonRef}
        >
          <img src="/user.svg" alt="Usuário" />
        </button>
      </div>

      <div
        id="navbar-desktop-menu"
        className={`navbar__desktop-menu${isDesktopMenuOpen ? ' navbar__desktop-menu--open' : ''}`}
        ref={desktopMenuRef}
      >
        <button className="navbar__desktop-item" type="button" onClick={handleGoToPerfil}>
          Meu perfil
        </button>
        <button className="navbar__desktop-item" type="button" onClick={handleGoToCarteira}>
          Carteira
        </button>
        <button className="navbar__desktop-item" type="button" onClick={handleGoToListaUsuarios}>
          Lista de usuários (somente adms)
        </button>
      </div>

      <div
        id="navbar-mobile-menu"
        className={`navbar__mobile-menu${isMenuOpen ? ' navbar__mobile-menu--open' : ''}`}
        ref={menuRef}
      >
        <div className="navbar__mobile-avatar">
          <img src="/user.svg" alt="Usuário" />
        </div>
        <button className="navbar__mobile-item" type="button" onClick={handleGoToPerfil}>
          Meu perfil
        </button>
        <button className="navbar__mobile-item" type="button" onClick={handleGoToCarteira}>
          Carteira
        </button>
        <button className="navbar__mobile-item" type="button" onClick={handleGoToListaUsuarios}>
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
