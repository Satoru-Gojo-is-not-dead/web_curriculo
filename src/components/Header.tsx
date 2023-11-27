import Logo from './Logo'
import Menu from './Menu'
import '../styles/components/header.sass'

const header = () => {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  )
}

export default header