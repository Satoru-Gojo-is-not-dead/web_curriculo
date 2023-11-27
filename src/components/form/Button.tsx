import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/form/button.sass'

interface ButtonProps {
  type:'button' | 'submit' | 'reset',
  path: string
  children?: string,
  id?: string,
}

const Button: FunctionComponent<ButtonProps> = ({type, path, children, id}) => {
  return (
    <>
      <Link to={path} className="button-pattern" type={type} id={id}>
      {children}
      </Link>
    </>
  )
}

export default Button