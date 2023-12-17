import { TypeAnimation } from 'react-type-animation';

type Props = {
  items: (string | number)[];
  message: string;
  classStyle: string;
}

const Typing: React.FC<Props> = ({ items, message, classStyle }: Props) => {
  return (
    <span className={classStyle}>
      <TypeAnimation
        sequence={items}
        wrapper="span"
        speed={10}
        repeat={Infinity}
      /> <span>{message}</span>
    </span>
  )
}

export default Typing
