import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    -webkit-transition: .3s ease-in-out all;
    transition: .3s ease all;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    /* scrollbar-gutter: stable; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: 'Rubik', sans-serif;
    box-sizing: border-box;
  }
`
