import { TextareaStyled, LabelStyled, ErrorStyled } from './textarea.styles'

const Textarea = ({ label, error = '', ...props }: any) => {
  return (
    <>
      <TextareaStyled {...props}/>
      {label ? <LabelStyled htmlFor={props.name}>{label}</LabelStyled> : null}
      {error ? <ErrorStyled>{error}</ErrorStyled> : <ErrorStyled></ErrorStyled>}
    </>
  )
}

export default Textarea
