import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import Burger from 'components/Icons/burger'
import Close from 'components/Icons/close'

import { ContentBox as Content } from 'components/Content/content.styles'

import useDarkMode from 'hooks/useDarkMode'
import useScroll from 'hooks/useScroll'
import useScrollBlock from 'hooks/useScrollBlock'

import {
  Header as StyledHeader,
  Nav,
  NavHidden,
  NavLink,
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
          <Name>
            <ImageWrapper>
              <Image src="/logo.svg" layout="fill" alt="Logo LuisFOsG"/>
            </ImageWrapper>
            <span>LuisFOsG</span>
          </Name>
        </Link>
        <Nav>
          <NavHidden isOpen={isOpen}>
            <Link href="/blog" passHref>
              <NavLink isHidden onClick={() => handleClick(2)}>{ t('blog') }</NavLink>
            </Link>
            <Link href="/contact" passHref>
              <NavLink isHidden onClick={() => handleClick(2)}>{ t('contact') }</NavLink>
            </Link>
          </NavHidden>
          <Hamburger onClick={() => handleClick(1)}>
            { isOpen ? <Close fill={fill} /> : <Burger fill={ fill } /> }
          </Hamburger>
          <NavLink animated onClick={() => toggleTheme()}>
            { isDark ? '🌞' : '🌙' }
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
