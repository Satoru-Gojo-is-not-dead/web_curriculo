import { useState, useEffect } from 'react'
import { urlApi } from '../constants/api'
import { LanguageType } from '../types/language'
import '../styles/components/languages.sass'

const Languages = () => {

  const [languages, setLanguages] = useState<LanguageType[]>([])

  useEffect(() => {
    const getLanguages = async () => {
      const response = await fetch(urlApi + "api/get_languages.php", {
        method: "GET",
        headers: {
          'Content-type': "application/json",
        },
      })

      const data = await response.json()

      setLanguages(data)
    }

    getLanguages()
  }, [])

  return (
    <div id="languages-container">
      <h2 className='header-left'>Idiomas</h2>
      <ul>
      {languages && languages.map((language) => {
        return(
          <li className="languague-box" key={language.id}>
                <p>{language.name}</p>
                <p>Nível: {language.category}</p>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Languages