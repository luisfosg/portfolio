import { ButtonStyled } from './button.styles'
import { FormGroup } from '../Content/content.styles'

const Button = ({ children, ...props }: any) => {
  return (
    <FormGroup notMargin>
      <ButtonStyled {...props}>{ children }</ButtonStyled>
    </FormGroup>
  )
}

export default Button
