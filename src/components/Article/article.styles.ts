import styled from 'styled-components'
import { addOpacity } from 'utils'

export const ArticleContainer = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background: ${({ theme }) => addOpacity(theme.colors.nord4, 0.1)};
  box-shadow: 0 8px 32px 0 ${({ theme }) => addOpacity(theme.colors.nord6, 0.37)};
  backdrop-filter: blur( 6px );
  -webkit-backdrop-filter: blur( 6.5px );
  border-radius: 10px;
  border: 1px solid ${({ theme }) => addOpacity(theme.colors.nord3, 0.2)};

  &:hover {
    background: ${({ theme }) => addOpacity(theme.colors.nord4, 0.25)};
    color: ${({ theme }) => theme.colors.text};

    img {
      opacity: 1;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;

  span {
    position: relative;
    width: 100%;
    border-radius: 10px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.85;
      object-fit: cover;
    }
  }
`

export const ArticleTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 0.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.nord1};
`

export const ArticleTag = styled.span`
  margin-left: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.nord12};

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    text-align: center;
  }
`

export const DateRead = styled.span`
  margin: 0.5rem;
  color: ${({ theme }) => theme.colors.nord11};
`
