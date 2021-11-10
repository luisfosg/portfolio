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
    font-size: ${({ theme }) => theme.fontSizes[0]};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    scrollbar-gutter: stable;

    @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
      font-size: ${({ theme }) => theme.fontSizes[1]};
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: 'Rubik', sans-serif;
    box-sizing: border-box;

    -webkit-transition: .3s ease-in-out background-color;
    transition: .3s ease-in-out background-color;

    ::-webkit-scrollbar {
      width: 10px;
      background-color: ${({ theme }) => theme.colors.background};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.nord1};
      border-radius: 9999px;
    }

    ::selection {
      background-color: ${({ theme }) => theme.colors.nord1};
      color: ${({ theme }) => theme.colors.background};
    }
  }
`
