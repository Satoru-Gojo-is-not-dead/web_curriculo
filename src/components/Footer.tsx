import Logo from './Logo'
import { Link } from 'react-router-dom'
import '../styles/components/footer.sass'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <Logo />
        <ul className="footer-menu">
          <li><Link to="/">Início</Link></li>
          <li><a href="#about-me">Sobre mim</a></li>
          <li><Link to="/experiences">Portfolio</Link></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
      <p className='copyright'>Flávio Tonon &copy; 2023</p>
    </footer>
  )
}

export default Footer