import { STYLE_BUTTONS } from '@common/constant'

const Link = ({children, to }: Props) => {
  return (
    <a className={`${STYLE_BUTTONS}`} href={to}>
      {children}
    </a>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  to?: string
}

export default Link
