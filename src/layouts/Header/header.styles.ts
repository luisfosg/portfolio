import styled from 'styled-components'
import { addOpacity } from 'utils'

type HeaderProps = {
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
  background-color: ${({ theme }) => addOpacity(theme.colors.background, 0.7)};
  backdrop-filter: blur(3px);
`

export const Nav = styled.nav`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

type NavHiddenProps = {
  isOpen: boolean,
}

export const NavHidden = styled.div<NavHiddenProps>`
  display: inline-flex;
  height: 100%;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
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
    z-index: -1;

    background-color: ${({ theme }) => addOpacity(theme.colors.background, 0.9)};
    backdrop-filter: blur(3px);
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

  border-radius: 0.25rem;
  padding: 0.15rem 0.5rem;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: background-color 0.2ms ease-in-out;

  &:active,
  &:hover {
    color: inherit;
    background-color: ${({ theme, animated }) => animated ? 'transparent' : addOpacity(theme.colors.nord5, 0.5)};
    transform: ${({ animated }) => animated ? 'rotate(360deg)' : 'none'};
    opacity: ${({ animated }) => animated ? '0.5' : '1'};
    transition: opacity, transform 1s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    ${({ isHidden }) => isHidden && `
      margin: 10px 0;
      width: 100%;
      height: 100%;
      max-height: 50px;
    `}
  }
`

export const Name = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: pointer;

  span {
    margin-left: 0.3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    span {
      display: none;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 1.7rem;
  height: 1.65rem;
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin: 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
  }
`
