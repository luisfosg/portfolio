import { ToggleWrapper, Span } from './toggle.styles'

type ToggleProps = {
  toggle: boolean,
  OnTrue?: (props: any) => JSX.Element,
  OnFalse?: (props: any) => JSX.Element,
  setToggle: Function,
}

const Toggle = ({ setToggle, toggle, OnTrue, OnFalse }: ToggleProps) => {
  return (
    <ToggleWrapper color="primary" onClick={() => setToggle()}>
      {
        (OnTrue && OnFalse)
          ? toggle ? <OnTrue fill="#5E81AC"/> : <OnFalse fill="#5E81AC"/>
          : <Span isActive={toggle}/>
      }
    </ToggleWrapper>
  )
}

export default Toggle
