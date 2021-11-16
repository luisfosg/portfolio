import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  min-height: 70vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`

export const Info = styled.div`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Text = styled.p`
  margin: 1.5rem 0;
  font-size: 1.1rem;
`

export const Section = styled.section`
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin: 0;
  }
`

export const SectionFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  a {
    margin: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[2]}) {
    justify-content: center;
  }
`
