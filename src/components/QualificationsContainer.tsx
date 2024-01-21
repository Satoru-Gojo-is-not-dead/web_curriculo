import { useState, useEffect, SyntheticEvent } from "react";
import { urlApi } from "../constants/api";
import { QualificationsType } from "../types/qualifications";
import QualificationsBox from "./QualificationsBox";
import "../styles/components/qualifications.sass";
import Footer from "./Footer";

const QualificationsContainer = () => {
  const [qualifications, setQualifications] = useState<QualificationsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [boxesToShow, setBoxesToShow] = useState(4);

  const handleBoxestoShow = (e: SyntheticEvent<HTMLButtonElement>) => {

    const buttonText = e.currentTarget.textContent;

    if (buttonText === "Mostrar tudo") {
      setBoxesToShow(qualifications.length)
      e.currentTarget.textContent = 'Mostrar Menos'
    }
    else {
      setBoxesToShow(4)
      e.currentTarget.textContent = 'Mostrar tudo'
    }

  }

  useEffect(() => {
    const getQualifications = async () => {
      try {
        const response = await fetch(urlApi + "/api/get_qualifications.php", {
          headers: {
            "Content-type": "application/json",
          },
        });

        const data = await response.json();

        setQualifications(data);
      } catch (error) {
        setError("Erro ao buscar qualificações");
      } finally {
        setLoading(false);
      }
    };

    getQualifications();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (

    <main id="container">
      <h2 className="header-left">Qualificações</h2>
      <div id="qualifications-container">
        {qualifications.slice(0, boxesToShow).map((qualification) => (
          <QualificationsBox key={qualification.id} id={qualification.id} synthesis={qualification.synthesis} />
        ))}
      </div>
      <button className="button-pattern center-element" onClick={handleBoxestoShow}>Mostrar tudo</button>
      <Footer/>
    </main>

  )
}

export default QualificationsContainer