import { useRouter } from 'next/router'
import Link from 'next/link'
import { WithChildren } from 'utils/index'

import { NavLinkStyled } from 'layouts/Header/header.styles'

type NavLinkProps = WithChildren<{
  href: string,
  isHidden?: boolean,
  locale?: string,
  onClick?: () => void,
}>

const NavLink = ({ children, href, locale, ...props }: NavLinkProps) => {
  const { pathname } = useRouter()
  const isActive = pathname === href

  return (
    <Link href={ href } locale={locale} passHref>
      <NavLinkStyled isActive={isActive} {...props}>
        { children }
      </NavLinkStyled>
    </Link>
  )
}

export default NavLink
