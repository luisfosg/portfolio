import useTranslation from 'next-translate/useTranslation'

type ToggleProps = {
  toggle: boolean,
  setToggle: Function,
}

const Toggle = ({ setToggle, toggle }: ToggleProps) => {
  const { t } = useTranslation('toggle')

  return (
    <div onClick={() => setToggle()}>
      { t('toggle') }
    </div>
  )
}

export default Toggle
