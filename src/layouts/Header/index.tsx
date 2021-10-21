import { useRouter } from 'next/router'
import Link from 'next/link'

import Sun from 'components/icons/sun'
import Moon from 'components/icons/moon'
import { ContentBox as Content } from 'components/content/content.styles'

import useDarkMode from 'hooks/useDarkMode'

import { Header as StyledHeader, Nav, NavLink, Name } from './header.styles'

const Header = () => {
  const router = useRouter()
  const { theme, toggleTheme } = useDarkMode()

  const isDark = theme === 'dark'
  return (
    <StyledHeader bg="secondary">
      <Content centered>
        <Link href="/" passHref>
          <Name>LuisFOsG</Name>
        </Link>
        <Nav>
          {
            router.locales?.map(locale => (
              <Link key={locale} href={router.asPath} locale={locale} passHref>
                <NavLink key={locale} active={locale === router.locale}>{ locale }</NavLink>
              </Link>
            ))
          }
          <NavLink onClick={() => toggleTheme()}>
            {isDark ? <Sun fill="#fff"/> : <Moon fill="#434C5E"/>}
          </NavLink>
        </Nav>
      </Content>
    </StyledHeader>
  )
}

export default Header
