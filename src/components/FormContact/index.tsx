import { FormEvent } from 'react'

import Input from '../Input/index'
import Textarea from '../Textarea/index'
import Button from '../Button/index'

import useField from 'hooks/useField'

import { FormContactContainer, FormContainer, FormContactTitle } from './formContact.styles'

const FormContact = () => {
  const name = useField('text')
  const email = useField('email')
  const message = useField('textarea')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    name.reset()
    email.reset()
    message.reset()
  }

  return (
    <FormContactContainer>
      <FormContactTitle>Get In Touch</FormContactTitle>
      <FormContainer onSubmit={handleSubmit}>
        <Input {...name.form} placeholder="Name" required/>
        <Input {...email.form} placeholder="Email" required/>
        <Textarea {...message.form} placeholder="Drop me a line…" required/>
        <Button>Submit</Button>
      </FormContainer>
    </FormContactContainer>
  )
}

export default FormContact
