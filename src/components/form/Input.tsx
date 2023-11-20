import { FunctionComponent, ChangeEvent } from 'react'
import '../../styles/components/form/input.sass'

interface InputProps {
  type: string,
  placeholder: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  id?: string,
  minLength?: number,
  maxLength?: number,
}

const Input: FunctionComponent<InputProps> = ({ placeholder, type, handleChange, id, maxLength, minLength }) => {
  return (
    <>
      <input onChange={handleChange} className='input-pattern' type={type} placeholder={placeholder} id={id} minLength={minLength} maxLength={maxLength} />
    </>
  )
}

export default Input