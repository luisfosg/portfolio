import styled from 'styled-components'

export const Container = styled.section`
  min-width: 100%;
  min-height: 100%;
  height: 440px;
`

export const CarouselContainer = styled.div`
  min-width: 40rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 100%;
    width: 100%;
  }
`
