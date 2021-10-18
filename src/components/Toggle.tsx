type ToggleProps = {
  setToggle: Function,
}

const Toggle = ({ setToggle }: ToggleProps) => {
  return (
    <div onClick={() => setToggle()}>
      Change Theme
    </div>
  )
}

export default Toggle
