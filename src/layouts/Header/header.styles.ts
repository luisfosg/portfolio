import styled from 'styled-components'
import {
  space,
  layout,
  color,
  compose,
  LayoutProps,
  ColorProps,
  SpaceProps
} from 'styled-system'

interface HeaderProps extends LayoutProps, ColorProps, SpaceProps {}

export const Header = styled.header<HeaderProps>`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  align-items: center;
  justify-content: space-between;
  user-select: none;

  ${compose(space, layout, color)}
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

type NavLinkProps = {
  active?: boolean
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
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const Name = styled.h1`
cursor: pointer;
`
