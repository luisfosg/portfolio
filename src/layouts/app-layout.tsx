import { WithChildren } from 'utils'

import { ContentContainer as Container } from 'components/Content/content.styles'

import Header from './Header'
import Footer from './Footer'
import Cursor from './Cursor'

type LayoutProps = WithChildren<{}>

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Cursor />
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
