import { FormEvent } from 'react'

import Input from '../Input/index'
import Textarea from '../Textarea/index'
import Button from '../Button/index'

import useField from 'hooks/useField'

import { FormContactContainer, FormContainer, FormContactTitle } from './formContact.styles'
import useTranslation from 'next-translate/useTranslation'

const FormContact = () => {
  const { t } = useTranslation('contact')

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
      name.setError(t('notName'))
      error = true
    }
    if (!value.email.includes('@')) {
      email.setError(t('notEmail'))
      error = true
    }
    if (!value.message) {
      message.setError(t('notMessage'))
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
      <FormContactTitle>{ t('title') }</FormContactTitle>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          {...name.form}
          id="name"
          name="name"
          placeholder={ t('name') }
          label={ t('name') }
          error={name.error}
        />
        <Input
          {...email.form}
          id="email"
          name="email"
          placeholder={ t('email') }
          label={ t('email') }
          error={email.error}
        />
        <Textarea
          {...message.form}
          id="message"
          name="message"
          placeholder={ t('message') }
          label={ t('message') }
          error={message.error}
        />
        <Button disabled={isDisabled}>{ t('submit') }</Button>
      </FormContainer>
    </FormContactContainer>
  )
}

export default FormContact
