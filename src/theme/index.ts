import { DefaultTheme } from 'styled-components'

import { themeDark } from './themeDark'
import { themeLight } from './themeLight'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string,
    text: string,
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      darkness: string;
      darknessLight: string;
      light: string;
      white: string;
    };
  }
}

type Themes = {
  [dark: string]: DefaultTheme,
  light: DefaultTheme,
}

export const themes: Themes = {
  dark: themeDark,
  light: themeLight
}
