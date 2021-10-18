import Toggle from 'components/Toggle'

import { WithChildren } from 'utils/index'

type LayoutProps = WithChildren<{
  setThemeMode: Function,
}>

const AppLayout = ({ children, setThemeMode }: LayoutProps) => {
  return (
    <div>
      <Toggle setToggle={setThemeMode} />
      <>{ children }</>
    </div>
  )
}

export default AppLayout
