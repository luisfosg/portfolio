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
    font-family: "Redacted";
    src: url("/.assets/fonts/redacted-script-regular.ttf") format('ttf');
  }

  .prototype {
    font-family: "Redacted Script";
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
