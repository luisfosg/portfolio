import styled from 'styled-components'

export const ButtonStyled = styled.button`
  cursor: pointer;
  width: 100%;
  height: 60px;
  font-size: 16px;
  border: none;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.nord15};
  color: ${({ theme }) => theme.colors.darkness};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.nord10};
  }
`
