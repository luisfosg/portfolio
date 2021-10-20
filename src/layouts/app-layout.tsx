import { WithChildren } from 'utils/index'
import Header from './Header/index'

type LayoutProps = WithChildren<{}>

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <>{ children }</>
    </div>
  )
}

export default AppLayout
