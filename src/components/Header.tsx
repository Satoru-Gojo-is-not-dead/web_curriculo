import '../styles/components/header.sass'

const header = () => {
  return (
    <header>
      <div className="logo">
        <i className="bi bi-braces"></i>
        <p>Flávio Tonon</p>
      </div>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre mim</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default header