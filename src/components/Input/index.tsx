import { InputStyled, LabelStyled } from './input.styles'
import { FormGroup } from '../Content/content.styles'

const Input = ({ label, ...props }: any) => {
  return (
    <FormGroup>
      <InputStyled {...props}/>
      {label ? <LabelStyled htmlFor={props.name}>{label}</LabelStyled> : null}
    </FormGroup>
  )
}

export default Input
