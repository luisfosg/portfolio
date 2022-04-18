import styled from 'styled-components'

export const ProyectSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

export const Proyect = styled.div`
  width: 100%;
  min-height: 30vh;
  margin: 5rem 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 40%;
  min-height: 40vh;
  height: 100%;

  span {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    img {
      object-fit: cover;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    order: 1;
    width: 100%;
  }
`

export const InfoProyect = styled.div`
  width: 60%;

  font-weight: 200;
  font-size: 1.3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    order: 2;
    width: 100%;
  }
`
