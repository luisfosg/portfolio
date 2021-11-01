import { useState } from 'react'
import { sendEmailService } from 'services/emailjs'

type sendEmailProps = {
  name: string;
  email: string;
  message: string;
}

const useSendEmail = () => {
  const [loading, setLoading] = useState(false)
  const [send, setSend] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = async (form: sendEmailProps) => {
    setLoading(true)
    try {
      const res = await sendEmailService(form)
      res ? setSend(true) : setError(true)
    } catch (_error) {
      setError(true)
    }
    setLoading(false)
  }

  return {
    sendEmail,
    send,
    loading,
    error
  }
}

export default useSendEmail
