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
      <button type={type} id={id}>
      {children}
      </button>
    </>
  )
}

export default Button