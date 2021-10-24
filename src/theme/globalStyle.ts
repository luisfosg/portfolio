import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .prototype {
    font-family: 'Redacted Script', sans-serif;
    color: #999;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    -webkit-transition: .3s ease-in-out background-color;
    transition: .3s ease-in-out background-color;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    /* scrollbar-gutter: stable; */

    ::-webkit-scrollbar {
      width: 10px;
      -webkit-transition: .3s ease-in-out background-color;
      transition: .3s ease-in-out background-color;
      background-color: ${({ theme }) => theme.colors.background};
    }

    ::-webkit-scrollbar-thumb {
      -webkit-transition: .3s ease-in-out background-color;
      transition: .3s ease-in-out background-color;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 9999px;
    }
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
