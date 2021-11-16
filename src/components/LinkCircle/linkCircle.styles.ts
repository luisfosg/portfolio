import styled from 'styled-components'
import { addOpacity } from 'utils'

export const LinkStyled = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: none;
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.nord1};
  border-radius: 100%;
  background-color: ${({ theme }) => addOpacity(theme.colors.nord11, 0.5)};
  color: ${({ theme }) => theme.colors.darkness};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.nord10};
    box-shadow: 0 0 4px 1px ${({ theme }) => addOpacity(theme.colors.nord9, 0.3)};
  }

  user-select: none;
`
