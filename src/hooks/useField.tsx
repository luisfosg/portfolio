import { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

const useField = (type: string) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const { lang } = useTranslation()

  useEffect(() => {
    setError('')
  }, [lang])

  const onChange = (e: any) => {
    setValue(e.target.value)
    e.target.value === '' ? e.target.setCustomValidity('Error') : e.target.setCustomValidity('')
    if (error !== '') setError('')
  }

  const reset = () => {
    setValue('')
    setError('')
  }

  return {
    form: {
      type,
      value,
      onChange
    },
    error,
    setError,
    reset
  }
}

export default useField
