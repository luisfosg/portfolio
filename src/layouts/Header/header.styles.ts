import styled from 'styled-components'
import {
  space,
  layout,
  color,
  compose
} from 'styled-system'

import { SystemProps } from 'utils'

export const Header = styled.header<SystemProps>`
  display: flex;
  position: sticky;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  z-index: 1;

  user-select: none;
  ${compose(space, layout, color)}
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`

type NavHiddenProps = {
  isOpen: boolean,
}

export const NavHidden = styled.div<NavHiddenProps>`
  display: inline-block;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'inline-block' : 'none'};

    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

type NavLinkProps = {
  active?: boolean,
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
    transform: ${({ animated }) => animated ? 'rotate(180deg)' : 'none'};
    opacity: ${({ animated }) => animated ? '0.5' : '1'};
    transition: opacity, transform 1s;
  }
`

export const Name = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

  span {
    height: 2px;
    width: 25px;
    background: ${({ theme }) => theme.colors.text};
    margin-bottom: 4px;
    border-radius: 5px;
  }

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
