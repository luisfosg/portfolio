import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url("/.assets/fonts/rubik300.woff2") format('woff2');
  }

  @font-face {
    font-family: "Prototype";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url("/.assets/fonts/prototype.ttf");
  }

  .prototype {
    font-family: "Prototype";
    color: #999;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    -webkit-transition: .3s ease-in-out all;
    transition: .3s ease all;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    /* scrollbar-gutter: stable; */

    ::-webkit-scrollbar {
      width: 10px;
      background-color: ${({ theme }) => theme.colors.background};
      transition: .3s ease all;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 9999px;
      transition: .3s ease all;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: 'Rubik';
    box-sizing: border-box;
  }
`
