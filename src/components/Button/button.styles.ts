import styled from 'styled-components'
import { addOpacity } from 'utils/index'

export const ButtonStyled = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  font-size: 1.3rem;
  border: none;
  border-radius: 9999px;
  background-color: ${({ theme }) => addOpacity(theme.colors.nord11, 0.5)};
  color: ${({ theme }) => theme.colors.darkness};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.nord10};
  }

  &[disabled] {
    opacity: .3;
    pointer-events: none;
  }
`
