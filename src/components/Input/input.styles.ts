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
    color: transparent;
  }

  &:focus {
    box-shadow: 0 0 4px 1px ${({ theme }) => addOpacity(theme.colors.nord9, 0.3)};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label{
    font-size: 1rem;
    padding-left: 15px;
    transform: translateY(-3.5em) scale(0.8);
    cursor: default;
  }

  &:focus-within {
    transform:scale(1.01, 1.01);
  }
`

export const LabelStyled = styled.label`
  font-size: 16px;
  padding-left: 10px;
  color: ${({ theme }) => addOpacity(theme.colors.nord1, 0.6)};
  display: block;

  position: absolute;
  cursor: text;
  opacity: 1;
  transform: translateY(-1.8em);
  transform-origin: 0 0;
  transition: all 0.3s;
  user-select: none;
`
