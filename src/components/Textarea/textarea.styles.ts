import styled from 'styled-components'
import { addOpacity } from 'utils/index'

export const TextareaStyled = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  font-size: 1.3rem;
  border-radius: 10px;

  border: none;
  outline: none;
  resize: vertical;
  min-height: 10rem;

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
    padding-left: 1.2rem;
    transform: translateY(7.5rem);
    cursor: default;
  }

  &:focus-within {
    transform:scale(1.01, 1.01);
  }
`

export const LabelStyled = styled.label`
  font-size: 1.2rem;
  padding-left: 0.8rem;
  color: ${({ theme }) => addOpacity(theme.colors.nord1, 0.6)};

  position: absolute;
  cursor: text;
  opacity: 1;
  transform: translateY(8.8rem);
  transform-origin: 0 0;
  transition: all 0.3s;
  user-select: none;
`

export const ErrorStyled = styled.span`
  font-size: 1rem;
  min-height: 0.5rem;
  max-height: 0.5rem;
  padding-left: 0.5rem;
  color: ${({ theme }) => theme.colors.nord12};
  cursor: text;
  opacity: 1;
  margin-bottom: 1rem;
`
