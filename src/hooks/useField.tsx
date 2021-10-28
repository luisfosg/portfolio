import { useState } from 'react'

const useField = (type: string) => {
  const [value, setValue] = useState('')

  const onChange = (e: any) => {
    setValue(e.target.value)
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
    reset
  }
}

export default useField
