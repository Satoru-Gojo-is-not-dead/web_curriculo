import { FunctionComponent } from 'react'
import '../../styles/components/form/button.sass'

interface ButtonProps {
  type:'button' | 'submit' | 'reset',
  children?: string,
  id?: string,
}

const Button: FunctionComponent<ButtonProps> = ({type, children, id}) => {
  return (
    <>
      <a href='/portfolio' className="button-pattern" type={type} id={id}>
      {children}
      </a>
    </>
  )
}

export default Button