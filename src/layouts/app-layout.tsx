import { WithChildren } from 'utils/index'

import { ContentContainer as Container } from 'components/Content/content.styles'

import Header from './Header/index'
import Footer from './Footer/index'

type LayoutProps = WithChildren<{}>

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
