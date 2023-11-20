import Button from './form/Button'
import FlavioTosin from '../assets/img/ft.png'
import '../styles/components/about.sass'

const About = () => {
  return (
    <section>
      <h2>Sobre mim</h2>
      <div className="container">
        <div className="info-container">
          <p className="about-me">
            Me chamo Flavio Tonon, e sou um entusiasta incansável da Tecnologia da Informação. Aqui está uma breve visão sobre quem eu sou:

            Ao longo da minha carreira, mergulhei profundamente no desenvolvimento de sistemas. Minha abordagem é criar soluções adaptáveis e personalizadas, alinhadas com as necessidades específicas de cada projeto.

            Minha expertise vai além do código. Sou um estrategista na busca pelas melhores soluções, avaliando minuciosamente as demandas do projeto e as inovações disponíveis no mercado.
          </p>
          <Button type='button'>Ver Qualificações</Button>
        </div>
        <img src={FlavioTosin} alt="Flavio Tonon" className='flavio-tosin' />
      </div>
    </section>
  )
}

export default About