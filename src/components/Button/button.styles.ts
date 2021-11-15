import styled from 'styled-components'
import { addOpacity } from 'utils'

export const ButtonStyled = styled.button`
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 40px;
  font-size: 1.3rem;
  border: none;
  border-radius: 9999px;
  background-color: ${({ theme }) => addOpacity(theme.colors.nord11, 0.5)};
  color: ${({ theme }) => theme.colors.darkness};

  &:hover,
  &:focus,
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
