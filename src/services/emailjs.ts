import emailjs from 'emailjs-com'

type sendEmailProps = {
  name: string;
  email: string;
  message: string;
}

export const sendEmailService = async (form: sendEmailProps) => {
  if (
    !process.env.NEXT_PUBLIC_SERVICEID ||
    !process.env.NEXT_PUBLIC_TEMPLATEID ||
    !process.env.NEXT_PUBLIC_USERID
  ) {
    return false
  }

  return await emailjs.send(
    process.env.NEXT_PUBLIC_SERVICEID,
    process.env.NEXT_PUBLIC_TEMPLATEID,
    form,
    process.env.NEXT_PUBLIC_USERID
  )
}
