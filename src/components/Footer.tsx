import Logo from './Logo'
import Menu from './Menu'
import '../styles/components/footer.sass'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <Logo />
        <Menu />
      </div>
      <p className='copyright'>Satoru isn't dead &copy; 2023</p>
    </footer>
  )
}

export default Footer