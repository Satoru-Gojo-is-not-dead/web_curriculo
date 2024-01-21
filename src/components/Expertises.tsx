import { useState, useEffect } from 'react'
import { urlApi } from '../constants/api'
import { expertisesType } from '../types/expertises'

import '../styles/components/expertises.sass'

const Expertises = () => {

  const [expertises, setExpertises] = useState<expertisesType[]>([])

  useEffect(() => {

    const getExpertises = async () => {
      const res = await fetch(urlApi + "/api/get_expertises.php")

      const data = await res.json()

      setExpertises(data)
    }

    getExpertises()
  }, [])


  return (
    <>
      <section id="expertises-container">
        {expertises.length > 0 ? (
          expertises.map((expertise) => (
            <div key={expertise.id}>
              <h3>{expertise.name}</h3>
              <ul>
                {expertise.expertise_descriptions.map((desc) => (
                  <li key={desc.id}>{desc.description}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </section>
    </>
  );
}

export default Expertises