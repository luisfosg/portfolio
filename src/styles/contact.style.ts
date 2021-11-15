import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  min-height: 70vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
  }
`

export const Info = styled.div`
  width: 100%;
`

export const Text = styled.p`
  margin: 2rem 0;
  font-size: 1.1rem;
`
