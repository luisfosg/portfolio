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
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.background};
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

  * {
    font-family: 'Rubik', sans-serif;
    box-sizing: border-box;

    -webkit-transition: .3s ease-in-out background-color;
    transition: .3s ease-in-out background-color;

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
`
