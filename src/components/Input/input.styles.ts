import styled from 'styled-components'
import { addOpacity } from 'utils/index'

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: none;
  padding: 0 10px;
  outline: none;
  border-radius: 10px;

  background-color: ${({ theme }) => addOpacity(theme.colors.nord7, 0.6)};
  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: ${({ theme }) => addOpacity(theme.colors.nord3, 0.5)};
  }

  &:focus {
    box-shadow: 0 0 4px 1px ${({ theme }) => addOpacity(theme.colors.nord9, 0.3)};
  }
`
