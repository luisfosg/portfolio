import styled from 'styled-components'
import { color } from 'styled-system'

export const Container = styled.div`
  min-height: 90vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
 ${color}
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`
