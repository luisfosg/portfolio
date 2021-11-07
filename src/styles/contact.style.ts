import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  min-height: 70vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Info = styled.div`
  width: 100%;
`
