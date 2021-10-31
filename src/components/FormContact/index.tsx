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

    let error = false
    const value = {
      name: name.form.value,
      email: email.form.value,
      message: message.form.value
    }

    if (!value.name) {
      name.setError('Name is required')
      error = true
    }
    if (!value.email.includes('@')) {
      email.setError('Email is required')
      error = true
    }
    if (!value.message) {
      message.setError('Message is required')
      error = true
    }
    if (error) return

    name.reset()
    email.reset()
    message.reset()
  }

  const isDisabled = name.form.value === '' || email.form.value === '' || message.form.value === ''
  return (
    <FormContactContainer>
      <FormContactTitle>Get In Touch</FormContactTitle>
      <FormContainer onSubmit={handleSubmit}>
        <Input {...name.form} id="name" name="name" placeholder="Name" label="Name" error={name.error} />
        <Input {...email.form} id="email" name="email" placeholder="Email" label="Email" error={email.error}/>
        <Textarea {...message.form} id="message" name="message" placeholder="Drop me a line…" label="Drop me a line…" error={message.error}/>
        <Button disabled={isDisabled}>Submit</Button>
      </FormContainer>
    </FormContactContainer>
  )
}

export default FormContact
