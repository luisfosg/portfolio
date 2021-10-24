import styled from 'styled-components'
import {
  space,
  layout,
  color,
  compose
} from 'styled-system'

import { SystemProps } from 'utils'

export const Header = styled.header<SystemProps>`
  display: inline-flex;
  position: sticky;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  z-index: 1;

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

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 45px;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    min-height: 95vh;
    transition: .5s all ease;
    ${compose(space, layout, color)}
  }
`

type NavLinkProps = {
  active?: boolean,
  isHidden?: boolean,
  animated?: boolean,
}

export const NavLink = styled.a<NavLinkProps>`
  cursor: pointer;
  border-radius: 0.25em;
  padding: 0.15em 0.5em;
  margin: 0 10px;
  font-size: 1.5em;
  transition: background-color 0.2ms ease-in-out;
  max-height: 1.5em;
  background-color: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ theme, animated }) => animated ? 'transparent' : theme.colors.primary};
    transform: ${({ animated }) => animated ? 'rotate(360deg)' : 'none'};
    opacity: ${({ animated }) => animated ? '0.5' : '1'};
    transition: opacity, transform 1s;
  }

  ${({ isHidden }) => isHidden && `
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      max-height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`

export const Name = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  cursor: pointer;

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    span {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
