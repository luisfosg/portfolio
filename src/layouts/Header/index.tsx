import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import Burger from 'components/icons/burger'
import Close from 'components/icons/close'

import { ContentBox as Content } from 'components/content/content.styles'

import useDarkMode from 'hooks/useDarkMode'

import {
  Header as StyledHeader,
  Nav,
  NavHidden,
  NavLink,
  Name,
  Hamburger
} from './header.styles'

const Header = () => {
  const router = useRouter()
  const { theme, toggleTheme } = useDarkMode()
  const [isOpen, setIsOpen] = useState(false)

  const isDark = theme === 'dark'
  const fill = isDark ? '#fff' : '#434C5E'

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledHeader bg="secondary">
      <Content>
        <Link href="/" passHref>
          <Name><Image src="/logo.svg" width="35" height="35" alt="Logo LuisFOsG"/><span>LuisFOsG</span></Name>
        </Link>
        <Nav>
          <NavHidden isOpen={isOpen} bg="secondary">
            <NavLink href="#" isHidden onClick={() => handleClick()}>Ejemplo</NavLink>
          </NavHidden>
          <Hamburger onClick={() => handleClick()}>
            { isOpen ? <Close fill={fill} /> : <Burger fill={ fill } /> }
          </Hamburger>
          <NavLink animated onClick={() => toggleTheme()}>
            {isDark ? '🌞' : '🌙'}
          </NavLink>
          {
            router.locales?.map(locale => (
              locale !== router.locale && (
                <Link key={locale} href={router.asPath} locale={locale} passHref>
                  <NavLink key={locale}>
                    {
                      locale === 'es'
                        ? <Image src="/images/es.svg" width="25" height="25" alt="España" />
                        : <Image src="/images/en.svg" width="25" height="25" alt="United States" />
                    }
                  </NavLink>
                </Link>
              )
            ))
          }
        </Nav>
      </Content>
    </StyledHeader>
  )
}

export default Header
