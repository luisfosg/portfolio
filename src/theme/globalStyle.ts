import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Nunito', sans-serif;

    ::-webkit-scrollbar {
      width: 10px;
      background-color: ${({ theme }) => theme.colors.nord5};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.nord1};
      border-radius: 9999px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.colors.nord8};
    }

    ::selection {
      background-color: ${({ theme }) => theme.colors.nord1};
      color: ${({ theme }) => theme.colors.background};
    }
  }

  html,
  body {
    font-size: ${({ theme }) => theme.fontSizes[0]};
    font-weight: 200;

    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) => `radial-gradient(rgba(120,121,151,.50) 1.5px,transparent 1.5px),radial-gradient(rgba(120,121,151,.50) 1.5px, ${theme.colors.background} 1.5px);`};
    background-position: 0 0,50px 50px;
    background-size: 100px 100px;

    color: ${({ theme }) => theme.colors.text};
    scrollbar-gutter: stable;

    @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
      font-size: ${({ theme }) => theme.fontSizes[1]};
    }
  }

  a {
    text-decoration: none;

    color: ${({ theme }) => theme.colors.nord2};
    &:hover {
      color: ${({ theme }) => theme.colors.nord8};
    }
  }

  strong {
    font-weight: 420;
  }
`
