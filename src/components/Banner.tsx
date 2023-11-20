import '../styles/components/Banner.sass'

import mainSvg from '../assets/svg/main.svg'

const Banner = () => {
  return (
    <main>
      <img className="banner-img" src={mainSvg} />
      <div className="info-container">
        <h1>
          Flávio de Almeida Tonon
        </h1>
        <p>Analista de segurança da informação</p>
        <ul className='social-links'>
          <li><a href="https://www.linkedin.com/in/flavio-tonon-076a53244/"> <i className="bi bi-linkedin"></i></a></li>
        </ul>
      </div>
    </main>
  )
}

export default Banner