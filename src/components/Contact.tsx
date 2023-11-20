import { ChangeEvent, FormEvent, useState } from 'react';

import Input from './form/Input'
import formSvg from '../assets/svg/form.svg'
import '../styles/components/contact.sass'
import Button from './form/Button'
import RichTextEditor from './form/RichTextEditor';


const Form = () => {

  type formData = {
    name: string,
    email: string,
    phone: string,
    message: string
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.id === 'name' && setName(e.target.value);
    e.target.id === 'email' && setEmail(e.target.value);
    e.target.id === 'phone' && setPhone(e.target.value);
  }

  const handleMessage = (value: string) => {
    setMessage(value)
  }

  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const credencials: formData = {
      'name': name,
      'email': email,
      'phone': phone,
      'message': message
    }

    console.log(credencials)
  }

  return (

    <section id="contact">
      <h2>Entre em contato!</h2>
      <div className="contact-container">
        <img src={formSvg} />
        <form onSubmit={hanldeSubmit}>
          <Input handleChange={handleChange} type='text' placeholder='Seu nome aqui ...' id='name' />
          <Input handleChange={handleChange} type='email' placeholder='Seu email aqui ...' id='email' />
          <Input handleChange={handleChange} type='phone' placeholder='Seu whatsapp aqui ...' id='phone' />
          <RichTextEditor handleContent={handleMessage} />
          <Button type='submit'>Enviar</Button>
        </form>
      </div>
    </section>

  )
}

export default Form