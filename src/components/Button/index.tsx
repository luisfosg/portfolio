import { ButtonStyled, AncordStyled } from './button.styles'
import { FormGroup } from '../Content/content.styles'

const Button = ({ children, isHref, ...props }: any) => {
  if (isHref) return <AncordStyled {...props}>{ children }</AncordStyled>
  return (
    <FormGroup notMargin>
      <ButtonStyled {...props}>{ children }</ButtonStyled>
    </FormGroup>
  )
}

export default Button
