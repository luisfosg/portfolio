import { InputStyled } from './input.styles'
import { FormGroup } from '../Content/content.styles'

const Input = (props: any) => {
  return (
    <FormGroup>
      <InputStyled {...props}/>
    </FormGroup>
  )
}

export default Input
