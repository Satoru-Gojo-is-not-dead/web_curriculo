import { urlApi } from "../constants/api"

const Qualifications = () => {

  const getQualifications = async () => {
    const response = await fetch(urlApi + "/api/get_qualifications.php", {
      headers: {
        'Content-type': "application/json",
      },
    })

    const data = await response.json()

    console.log(data)
  }
  getQualifications()

  return (
    <>
      
    </>
  )
}

export default Qualifications