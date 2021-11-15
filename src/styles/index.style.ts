import styled from 'styled-components'

export const HiContent = styled.div`
  width: 100%;
  min-height: 70vh;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
  }
`

export const Description = styled.section`
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  order: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    order: 1;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  height: 100%;
  order: 1;

  span {
    width: 100%;
    height: 100%;
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);

    img {
      object-fit: cover;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    order: 0;
    min-height: 30vh;

    span {
      clip-path: none;
    }
  }
`
