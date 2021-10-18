import { WithChildren } from 'util/index'

type LayoutProps = WithChildren<{}>

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main>{ children }</main>
    </div>
  )
}

export default AppLayout
