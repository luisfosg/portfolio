import styled from 'styled-components'

import { addOpacity } from 'utils'

export const AwesomeSquare = styled.section`
  position: relative;

  width: 100%;
  height: auto;
  padding: 2rem;

  background-color: ${props => addOpacity(props.theme.colors.nord11, 0.3)};
  border-radius: 2rem;
  margin-bottom: 2rem;

  z-index: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 3rem;
  }
`

type SquareProps = {
  radius: string,
  width: string,
  opacity: number,
}

export const Square = styled.div<SquareProps>`
  position: absolute;

  top: 0;
  left: 0;

  min-width: ${({ width }) => width};
  min-height: 100%;

  border-radius: ${({ radius }) => radius} 0 0 ${({ radius }) => radius};
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background-color: ${props => addOpacity(props.theme.colors.nord11, props.opacity)};

  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 95%;
  }
`

export const Square2 = styled.div<SquareProps>`
  position: absolute;

  top: 0;
  left: 0;

  min-width: ${({ width }) => width};
  min-height: 100%;

  border-radius: ${({ radius }) => radius} 0 0 0;
  clip-path: polygon(0 0, 52% 52%, 100% 0);
  background-color: ${props => addOpacity(props.theme.colors.nord12, props.opacity)};

  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 94%;
  }
`

export const HiContent = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`

export const Description = styled.section`
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  order: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.variant1};
    margin: 0;
    font-size: 3.5rem;
    font-weight: 900;
  }

  h2 {
    margin-top: 0;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.nord1};
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    text-align: center;
    align-items: center;
    order: 1;

    h1 {
      font-size: 2rem;
    }
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
    border-radius: 0 1rem 1rem 0;

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
      border-radius: 1rem 1rem 0 0;
    }
  }
`
