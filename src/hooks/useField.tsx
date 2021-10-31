import { useState } from 'react'

const useField = (type: string) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const onChange = (e: any) => {
    setValue(e.target.value)
    if (error !== '') setError('')
  }

  const reset = () => {
    setValue('')
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
