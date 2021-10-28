import { ButtonStyled } from './button.styles'

const Button = ({ children, ...props }: any) => {
  return (
    <ButtonStyled {...props}>{ children }</ButtonStyled>
  )
}

export default Button
