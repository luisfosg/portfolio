import styled from 'styled-components'

import { addOpacity } from 'utils'

export const AwesomeSquare = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem;

  background-color: ${props => addOpacity(props.theme.colors.nord11, 0.3)};
  border-radius: 2rem;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 3rem;
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
    color: ${({ theme }) => theme.colors.nord11};
    margin: 0;
    font-size: 2rem;
  }

  h2 {
    margin-top: 0;
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
