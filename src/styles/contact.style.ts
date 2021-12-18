import styled from 'styled-components'
import { addOpacity } from 'utils'

export const FormContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  min-height: 33rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`

export const Info = styled.div`
  width: 100%;

  background: ${({ theme }) => addOpacity(theme.colors.nord10, 0.2)};
  backdrop-filter: blur( 4px );
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`
  margin: 1.5rem 0;
  font-size: 1.3rem;
  text-align: center;
`

export const SectionFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    margin: 1rem;
  }
`
