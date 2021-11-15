import { LinkStyled } from './linkCircle.styles'

const LinkCircle = ({ children, ...props }: any) => {
  return (
    <LinkStyled {...props}>{ children }</LinkStyled>
  )
}

export default LinkCircle
