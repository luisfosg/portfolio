import { FormEvent, useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

import Modal from 'components/Modal'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import Button from 'components/Button'

import useField from 'hooks/useField'
import useSendEmail from 'hooks/useSendEmail'

import { FormContactContainer, FormContainer, FormContactTitle, Title } from './formContact.styles'

const FormContact = () => {
  const { t } = useTranslation('contact')
  const [showModal, setShowModal] = useState(false)
  const Email = useSendEmail()

  useEffect(() => {
    if (Email.send || Email.error) {
      setShowModal(true)
    }
  }, [Email.send, Email.error])

  const name = useField('text')
  const email = useField('email')
  const message = useField('textarea')

  const closeModal = () => setShowModal(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailRegex = /\S+@\S+\.\S+/

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

    if (!emailRegex.test(value.email)) {
      value.email ? email.setError(t('invalidEmail')) : email.setError(t('notEmail'))
      error = true
    }
    if (!value.message) {
      message.setError(t('notMessage'))
      error = true
    }
    if (error) return

    Email.sendEmail(value)

    name.reset()
    email.reset()
    message.reset()
  }

  return (
    <FormContactContainer>
      <FormContactTitle center>{ t('title') }</FormContactTitle>
      <FormContainer onSubmit={handleSubmit} noValidate>
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
          pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
        />
        <Textarea
          {...message.form}
          id="message"
          name="message"
          placeholder={ t('message') }
          label={ t('message') }
          error={message.error}
        />
        <Button disabled={Email.loading}>{ Email.loading ? t('loading') : t('submit') }</Button>
      </FormContainer>
      <Modal show={showModal} onClose={closeModal}>
        {
          Email.error && (
            <>
              <Title>{ t('titleError') }</Title>
              <p>{ t('error1') }<br /><strong>{ t('error2') }</strong></p>
              <h2>{ t('error3') }</h2>
            </>
          )
        }
        {
          Email.send && (
            <>
              <Title>{ t('titleSend') }</Title>
              <p>{ t('send1') }<br /><strong>{ t('send2') }</strong></p>
            </>
          )
        }
      </Modal>
    </FormContactContainer>
  )
}

export default FormContact
