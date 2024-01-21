import { useState, useEffect } from 'react'
import { urlApi } from '../constants/api'
import { portfolioType } from '../types/portfolio'
import Footer from './Footer'


const Portfolio = () => {

  const [works, setWorks] = useState<portfolioType[]>([])

  useEffect(() => {

    const getPortfolio = async () => {
      const res = await fetch(urlApi + "/api/get_portfolio.php")

      const data = await res.json()

      setWorks(data)
    }

    getPortfolio()
  }, [])

  return (
    <>
      <ul>
        {works.length > 0 && works.map((work) => (
          <li className='work-item' key={work.id}>{work.description}</li>
        ))}
      </ul>
      <Footer />
    </>
  )
}

export default Portfolio