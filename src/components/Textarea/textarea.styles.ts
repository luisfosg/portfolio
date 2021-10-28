import styled from 'styled-components'
import { addOpacity } from 'utils/index'

export const TextareaStyled = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 1rem;
  border-radius: 10px;

  border: none;
  outline: none;
  resize: vertical;
  min-height: 100px;

  background-color: ${({ theme }) => addOpacity(theme.colors.nord7, 0.6)};
  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: ${({ theme }) => addOpacity(theme.colors.nord3, 0.5)};
  }

  &:focus {
    box-shadow: 0 0 4px 1px ${({ theme }) => addOpacity(theme.colors.nord9, 0.3)};
  }
`
