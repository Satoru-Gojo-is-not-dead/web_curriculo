import {Link} from 'react-router-dom'
import '../styles/components/menu.sass'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><a href="#about-me">Sobre mim</a></li>
        <li><Link to="/experiences">Portfolio</Link></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  )
}

export default Menu