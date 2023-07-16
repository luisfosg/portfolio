import { STYLE_BUTTONS } from '@common/constant'

const Link = ({children, onclick, className }: Props) => {
  return (
    <button className={`${STYLE_BUTTONS} ${className}`} onClick={onclick}>
      {children}
    </button>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  onclick: () => void
}

export default Link
