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

interface ButtonProps extends LayoutProps, ColorProps, SpaceProps {}

export const ToggleWrapper = styled.div<ButtonProps>`
  display: inline-block;
  cursor: pointer;
  ${
    compose(
      space,
      layout,
      color
    )
  }
`

type SpanProps = {
  isActive: boolean
}

export const Span = styled.span<SpanProps>`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  height: 1.2rem;
  width: 3rem;
  border-radius: 9999px;
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.darkness};
  transition: 0.2s ease-in;

  ::after {
    content: "";
    position: absolute;
    left: ${({ isActive }) => isActive ? '22px' : '5px'};
    top: 0.09rem;
    width: 0.95rem;
    height: 0.95rem;
    border-radius: 9999px;
    background: ${({ theme, isActive }) => isActive ? theme.colors.darkness : theme.colors.primary};
    transition: left 0.4s ease-in;
  }
`
