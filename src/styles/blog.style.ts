import styled from 'styled-components'

export const PostBody = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
