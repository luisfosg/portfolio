import styled from 'styled-components'
import {
  space,
  layout,
  color,
  compose
} from 'styled-system'

import { SystemProps } from 'utils'

type HeaderProps = SystemProps & {
  isDark?: boolean,
  scroll: number
}

export const Header = styled.header<HeaderProps>`
  -webkit-transition: .3s ease-in-out background-color, box-shadow;
  transition: .3s ease-in-out background-color, box-shadow;
  display: inline-flex;
  position: sticky;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  min-height: 7.2vh;
  z-index: 1;

  box-shadow: ${({ scroll, isDark }) => {
    return isDark
    ? scroll > 0 ? '0px 4px 4px rgba(0, 0, 0, 0.1)' : 'none'
    : scroll > 0 ? '0px 0px 10px rgba(0, 0, 0, 0.1)' : 'none'
  }};

  user-select: none;
  ${compose(space, layout, color)}
`

export const Nav = styled.nav`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

type NavHiddenProps = SystemProps & {
  isOpen: boolean,
}

export const NavHidden = styled.div<NavHiddenProps>`
  display: inline-flex;
  height: 100%;
  user-select: none;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 7.2vh;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    min-height: 92.8vh;
    transition: .5s all ease;
    ${compose(space, layout, color)}
    z-index: -1;
  }
`

type NavLinkProps = {
  isHidden?: boolean,
  animated?: boolean,
}

export const NavLink = styled.a<NavLinkProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25em;
  padding: 0.15em 0.5em;
  margin: 0 10px;
  font-size: 1.5em;
  transition: background-color 0.2ms ease-in-out;

  &:active,
  &:hover {
    background-color: ${({ theme, animated }) => animated ? 'transparent' : theme.colors.nord5};
    transform: ${({ animated }) => animated ? 'rotate(360deg)' : 'none'};
    opacity: ${({ animated }) => animated ? '0.5' : '1'};
    transition: opacity, transform 1s;
  }

  ${({ isHidden }) => isHidden && `
    @media (max-width: 768px) {
      margin: 10px 0;
      width: 100%;
      height: 100%;
      max-height: 50px;
    }
  `}
`

export const Name = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  cursor: pointer;

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 1.3em;
  height: 1.3em;
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin: 0 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`
