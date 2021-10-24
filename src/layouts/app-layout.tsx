import { WithChildren } from 'utils/index'

import Header from './Header/index'
import Footer from './Footer/index'

type LayoutProps = WithChildren<{}>

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <>{ children }</>
      <Footer />
    </div>
  )
}

export default AppLayout
