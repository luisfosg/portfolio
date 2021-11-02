import styled from 'styled-components'
import { addOpacity } from 'utils/index'

export const InputStyled = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.3rem;
  border: none;
  padding: 0 0.8rem;
  outline: none;
  border-radius: 10px;

  background-color: ${({ theme }) => addOpacity(theme.colors.nord7, 0.6)};
  color: ${({ theme }) => theme.colors.text};


  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active  {
    box-shadow: 0 0 0 30px ${({ theme }) => addOpacity(theme.colors.nord7, 0.8)} inset;
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => addOpacity(theme.colors.nord7, 0.8)} inset !important;
  }

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
    transform: translateY(-3.5rem);
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
  display: block;

  position: absolute;
  cursor: text;
  opacity: 1;
  transform: translateY(-2.2rem);
  transform-origin: 0 0;
  transition: all 0.3s;
  user-select: none;
`

export const ErrorStyled = styled.span`
  font-size: 1rem;
  padding-left: 0.5rem;
  color: ${({ theme }) => theme.colors.nord12};
  display: block;

  position: absolute;
  cursor: text;
  opacity: 1;
  transform: translateY(-0.2rem);
  transform-origin: 0 0;
  transition: all 0.3s;
`
