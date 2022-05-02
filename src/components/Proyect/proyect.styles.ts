import styled from 'styled-components'

export const ContainerTitle = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const TitleMark = styled.h2`
  font-size: 2.5rem;
  position: absolute;

  color: ${({ theme }) => theme.colors.background};
  text-shadow:
    -1px -1px 0 ${({ theme }) => theme.colors.nord2},
    1px -1px 0 ${({ theme }) => theme.colors.nord2},
    -1px 1px 0 ${({ theme }) => theme.colors.nord2},
    1px 1px 0 ${({ theme }) => theme.colors.nord2};
`

export const TitleWave = styled.h2`
  font-size: 2.5rem;
  position: absolute;

  color: ${({ theme }) => theme.colors.nord12};
  animation: wave 3.5s ease-in-out infinite;

  @keyframes wave {
    0%, 100% {
      clip-path: polygon(38% 62%, 57% 70%, 71% 58%, 89% 54%, 100% 49%, 100% 100%, 0 100%, 0 69%, 16% 73%);
    }

    50% {
      clip-path: polygon(26% 37%, 51% 46%, 72% 36%, 91% 30%, 100% 18%, 100% 100%, 0 100%, 0 44%, 15% 37%);
    }
  }
`

export const Proyect = styled.div`
  width: 100%;
  min-height: 30vh;
  margin: 5rem 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    flex-direction: column;
    gap: 2rem;
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

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
