import { FormEvent } from 'react'

import useField from 'hooks/useField'

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
    <div>
      <form onSubmit={handleSubmit}>
        <input {...name.form} />
        <input {...email.form} />
        <textarea {...message.form}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormContact
