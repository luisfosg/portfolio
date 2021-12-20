import styled from 'styled-components'
import { addOpacity } from 'utils'

type ButtonProps = {
  isBackground?: boolean
  maxWidth?: string
}

export const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  outline: none;
  width: ${({ maxWidth }) => maxWidth || '100%'};
  height: 3.1rem;
  font-size: 1.3rem;
  border: ${({ isBackground, theme }) => isBackground ? `1px solid ${addOpacity(theme.colors.nord11, 0.5)}` : 'none'};
  border-radius: 9999px;
  background-color: ${({ isBackground, theme }) => (isBackground ? 'transparent' : addOpacity(theme.colors.nord11, 0.5))};
  color: ${({ theme, isBackground }) => isBackground ? theme.colors.nord11 : theme.colors.darkness};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.nord10};
    box-shadow: 0 0 4px 1px ${({ theme }) => addOpacity(theme.colors.nord9, 0.3)};
  }

  &[disabled] {
    opacity: .5;
    pointer-events: none;
  }

  user-select: none;
`

export const AncordStyled = styled.a<ButtonProps>`
  outline: none;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: ${({ maxWidth }) => maxWidth || '100%'};
  min-height: 3.1rem;

  font-size: 1.3rem;
  border: ${({ isBackground, theme }) => isBackground ? `1px solid ${addOpacity(theme.colors.nord11, 0.5)}` : 'none'};
  border-radius: 9999px;
  background-color: ${({ isBackground, theme }) => (isBackground ? 'transparent' : addOpacity(theme.colors.nord11, 0.5))};
  color: ${({ theme, isBackground }) => isBackground ? theme.colors.variant1 : theme.colors.darkness};

  &:hover,
  &:active {
    color: ${({ theme, isBackground }) => isBackground ? theme.colors.nord5 : theme.colors.darkness};
    background-color: ${({ theme }) => theme.colors.nord10};
    box-shadow: 0 0 4px 1px ${({ theme }) => addOpacity(theme.colors.nord9, 0.3)};
  }

  user-select: none;
`
