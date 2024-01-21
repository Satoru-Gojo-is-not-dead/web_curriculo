import { Link } from 'react-router-dom'
import '../styles/components/logo.sass'

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <i className="bi bi-braces"></i>
      <p>Flávio Tonon</p>
    </Link>
  )
}

export default Logo