import styled from 'styled-components'

export const HiContent = styled.div`
  width: 100%;
  min-height: 33rem;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    padding: 0 0 2rem 0;
  }
`

export const Description = styled.section`
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  order: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 1rem 0;
    font-size: 1.7rem;
  }

  span {
    display: block !important;
    position: relative !important;
    min-width: 12rem;
    max-width: 12rem;
    min-height: 2.5rem;
  }

  p {
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    text-align: center;
    align-items: center;
    order: 1;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 33rem;
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

export const LastContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${({ theme }) => theme.colors.nord5};
  margin: 2rem 0;
  padding: 2rem 0;
`

export const LastContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const Content = styled.section`
  width: 100%;
  max-height: 40em;
`

export const Video = styled.iframe`
  width: 100%;
  min-height: 20rem;
  max-width: 45rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-height: 15rem;
  }
`
