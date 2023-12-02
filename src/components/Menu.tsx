import { Link } from 'react-router-dom'
import { useRef } from 'react'
import '../styles/components/menu.sass'

const Menu = () => {

  const menuMobile = useRef<HTMLDivElement>(null)

  const handleMenuMobile = () => {
    menuMobile.current?.classList.toggle('fade')

    if (!menuMobile.current?.classList.contains('fade')) {
      document.body.style.overflow = "hidden"
      return
    }

    document.body.style.overflow = "auto"
  }

  const handleDismissMenu = () => {
    menuMobile.current?.classList.add('fade')
    document.body.style.overflow = "auto"
  }

  return (
    <nav>
      <ul className="laptop-menu">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/#about-me">Sobre mim</Link></li>
        <li><Link to="/experiences">Portfolio</Link></li>
        <li><Link to="/#contact">Contato</Link></li>
      </ul>
      <i className="bi bi-list" onClick={handleMenuMobile}></i>
      <div className="menu-mobile fade" ref={menuMobile}>
        <i onClick={handleDismissMenu} className="bi bi-x-lg"></i>
        <ul>
          <li onClick={handleDismissMenu}><Link to="/">Início</Link></li>
          <li onClick={handleDismissMenu}><Link to="/#about-me">Sobre mim</Link></li>
          <li onClick={handleDismissMenu}><Link to="/experiences">Portfolio</Link></li>
          <li onClick={handleDismissMenu}><Link to="/#contact">Contato</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu