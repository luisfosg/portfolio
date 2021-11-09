import styled from 'styled-components'

export const PostBody = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;

  img {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }

  a:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.nord15};
  }

  ul, ol {
    width: 80%;

    li {
      margin-top: 1rem;
    }
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  margin: 0 auto;

  span {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 10rem;
  }
`

export const InfoWrapper = styled.div`
  font-size: 1.3rem;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.nord1};
`
