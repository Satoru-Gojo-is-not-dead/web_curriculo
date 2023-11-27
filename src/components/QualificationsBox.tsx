import { FunctionComponent } from "react"
import { QualificationsType } from "../types/qualifications"

const QualificationsBox: FunctionComponent<QualificationsType> = ({id, synthesis}) => {
  return (

    <div className="qualification-box" key={id}>
      <p>{synthesis}</p>
    </div>
  )
}

export default QualificationsBox
