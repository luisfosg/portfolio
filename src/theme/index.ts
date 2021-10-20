import { DefaultTheme } from 'styled-components'

import { themeDark, themeLight } from './colors'

type Themes = {
  [dark: string]: DefaultTheme,
  light: DefaultTheme,
}

export type Colors = {
  background: string,
  text: string,
  primary: string;
  secondary: string;
  terciary: string;
  darkness: string;
  darknessLight: string;
  light: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    space: number[],
    breakpoints: string[],
    fontSizes: number[],
    colors: Colors;
  }
}

const globalTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '52em', '64em', '80em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}

export const themes: Themes = {
  dark: { ...globalTheme, colors: { ...themeDark } },
  light: { ...globalTheme, colors: { ...themeLight } }
}
