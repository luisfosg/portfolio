import styled from 'styled-components'

export const PostBody = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;

  text-align: justify;

  h2 {
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
  }

  a {
    color: ${({ theme }) => theme.colors.nord11};
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

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 100%;
    text-align: start;

    img {
      max-width: 100%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 100%;

    img {
      max-width: 70rem;
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
  margin-top: 1rem;
  width: 100%;
  height: 100%;
`

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    min-width: 12rem;
    margin: 0;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    flex-direction: column;
  }
`

export const DateContent = styled.span`
  font-size: 1rem;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-top: 1.5rem !important;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.nord11};
`

export const BlogMessage = styled.div`
  margin: 2rem 0;

  background-color: ${({ theme }) => theme.colors.nord7};
  color: ${({ theme }) => theme.colors.nord11};
  width: 100%;
  min-height: 5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.nord10};
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.nord16};
  }
`
