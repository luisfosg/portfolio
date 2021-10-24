import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import Burger from 'components/icons/burger'
import Close from 'components/icons/close'

import { ContentBox as Content } from 'components/content/content.styles'

import useDarkMode from 'hooks/useDarkMode'
import useScroll from 'hooks/useScroll'

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
  const { scrollY } = useScroll()

  const [isOpen, setIsOpen] = useState(false)

  const isDark = theme === 'dark'
  const fill = isDark ? '#fff' : '#434C5E'

  const handleClick = (num: number) => {
    if (!isOpen && num === 2) return
    setIsOpen(!isOpen)
  }

  return (
    <StyledHeader bg="background" isDark={isDark} scroll={scrollY}>
      <Content>
        <Link href="/" passHref>
          <Name><Image src="/logo.svg" width="30" height="30" alt="Logo LuisFOsG"/><span>LuisFOsG</span></Name>
        </Link>
        <Nav>
          <NavHidden isOpen={isOpen} bg="background">
          </NavHidden>
          <Hamburger onClick={() => handleClick(1)}>
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
