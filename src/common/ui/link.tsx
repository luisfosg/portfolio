import { STYLE_BUTTONS } from '@common/constant'

const Link = ({children, to, className }: Props) => {
  return (
    <a className={`${STYLE_BUTTONS} ${className}`} href={to}>
      {children}
    </a>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  to?: string
}

export default Link
