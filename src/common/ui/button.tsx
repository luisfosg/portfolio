import { STYLE_BUTTONS } from '@common/constant'

const Link = ({children, onclick }: Props) => {
  return (
    <button className={STYLE_BUTTONS} onClick={onclick}>
      {children}
    </button>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[];
  onclick: () => void
}

export default Link
