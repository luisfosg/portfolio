import { InputStyled, LabelStyled, ErrorStyled } from './input.styles'
import { FormGroup } from '../Content/content.styles'

const Input = ({ label, error = '', ...props }: any) => {
  return (
    <FormGroup>
      <InputStyled {...props}/>
      {label ? <LabelStyled htmlFor={props.name}>{label}</LabelStyled> : null}
      {error ? <ErrorStyled>{error}</ErrorStyled> : null}
    </FormGroup>
  )
}

export default Input
