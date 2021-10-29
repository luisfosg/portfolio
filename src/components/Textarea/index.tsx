import { TextareaStyled, LabelStyled } from './textarea.styles'

const Textarea = ({ label, ...props }: any) => {
  return (
    <>
      <TextareaStyled {...props}/>
      {label ? <LabelStyled htmlFor={props.name}>{label}</LabelStyled> : null}
    </>
  )
}

export default Textarea
