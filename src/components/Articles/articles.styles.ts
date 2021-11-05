import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 15px;
  margin-bottom: 1.1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
  }
`
