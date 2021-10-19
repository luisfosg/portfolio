import { WithChildren } from 'utils/index'
import Header from './Header/index'

type LayoutProps = WithChildren<{
  setThemeMode: Function,
}>

const AppLayout = ({ children, setThemeMode }: LayoutProps) => {
  return (
    <div>
      <Header setThemeMode={setThemeMode} />
      <>{ children }</>
    </div>
  )
}

export default AppLayout
