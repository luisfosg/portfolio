import useTranslation from 'next-translate/useTranslation'

type ToggleProps = {
  setToggle: Function,
}

const Toggle = ({ setToggle }: ToggleProps) => {
  const { t } = useTranslation('toggle')

  return (
    <div onClick={() => setToggle()}>
      { t('toggle') }
    </div>
  )
}

export default Toggle
