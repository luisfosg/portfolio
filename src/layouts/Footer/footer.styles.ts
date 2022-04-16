import styled from 'styled-components'
import { addOpacity } from 'utils'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 25vh;

  background-color: ${({ theme }) => addOpacity(theme.colors.nord5, 0.7)};
`

export const SectionFooter = styled.section`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-weight: 400;

  border-top: 1px solid ${({ theme }) => theme.colors.nord7};
`

export const FooterLink = styled.a`
  margin: 0.3rem 2rem;
`
