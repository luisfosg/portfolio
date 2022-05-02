import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import Burger from 'components/Icons/burger'
import Close from 'components/Icons/close'
import { ContentBox as Content } from 'components/Content/content.styles'
import NavLink from 'components/NavLink'

import useDarkMode from 'hooks/useDarkMode'
import useScroll from 'hooks/useScroll'
import useScrollBlock from 'hooks/useScrollBlock'

import {
  Header as StyledHeader,
  Nav,
  NavHidden,
  NavLinkStyled,
  Name,
  Hamburger,
  ImageWrapper
} from './header.styles'

const Header = () => {
  const { t } = useTranslation('header')

  const router = useRouter()
  const { theme, toggleTheme } = useDarkMode()
  const { allowScroll, blockScroll } = useScrollBlock()
  const { scrollY } = useScroll()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen ? blockScroll() : allowScroll()
  }, [isOpen, blockScroll, allowScroll])

  const isDark = theme === 'dark'
  const fill = isDark ? '#fff' : '#434C5E'

  const handleClick = (num: number) => {
    if ((!isOpen && num === 2) || num === 3) return
    setIsOpen(!isOpen)
  }

  return (
    <StyledHeader isDark={isDark} scroll={scrollY}>
      <Content>
        <Link href="/" passHref>
          <Name onClick={() => handleClick(2)}>
            <ImageWrapper>
              <Image src="/logo.svg" layout="fill" alt="Logo LuisFOsG"/>
            </ImageWrapper>
            <span>LuisFOsG</span>
          </Name>
        </Link>
        <Nav>
          <NavHidden isOpen={isOpen}>
            <NavLink href="/" isHidden onClick={() => handleClick(2)}>
              { t('home') }
            </NavLink>
            <NavLink href="/blog" isHidden onClick={() => handleClick(2)}>
              Blog
            </NavLink>
            <NavLink href="/contact" isHidden onClick={() => handleClick(2)}>
              { t('contact') }
            </NavLink>
          </NavHidden>
          <Hamburger onClick={() => handleClick(1)}>
            { isOpen ? <Close fill={fill} /> : <Burger fill={ fill } /> }
          </Hamburger>
          <NavLinkStyled animated onClick={() => toggleTheme()}>
            { isDark ? '🌙' : '🌞' }
          </NavLinkStyled>
          {
            router.locales?.map(locale => (
              locale !== router.locale && (
                <Link key={locale} href={router.asPath} locale={locale} passHref>
                  <NavLinkStyled key={locale}>
                    {
                      locale === 'es'
                        ? <Image src="/images/en.svg" width="25" height="25" alt="United States" />
                        : <Image src="/images/es.svg" width="25" height="25" alt="España" />
                    }
                  </NavLinkStyled>
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
