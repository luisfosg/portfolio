import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 25vh;

  background-color: ${({ theme }) => theme.colors.nord5};
`

export const SectionFooter = styled.section`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.colors.nord7};
`

export const FooterLink = styled.a`
  margin: 0.3rem 2rem;
  color: ${({ theme }) => theme.colors.nord2};

  &:hover {
    color: ${({ theme }) => theme.colors.nord8};
  }
`
