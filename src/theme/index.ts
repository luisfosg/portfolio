import { DefaultTheme } from 'styled-components'

import { themeDark, themeLight } from './colors'

type Themes = {
  [dark: string]: DefaultTheme,
  light: DefaultTheme,
}

export type Colors = {
  background: string,
  text: string,
  textDark: string,
  nord1: string,
  nord2: string,
  nord3: string,
  nord4: string,
  nord5: string,
  nord6: string,
  nord7: string,
  nord8: string,
  nord9: string,
  nord10: string,
  nord11: string,
  nord12: string,
  nord13: string,
  nord14: string,
  nord15: string,
  nord16: string,
  variant1: string,
  variant2: string,
  darkness: string;
  darknessLight: string;
  light: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    space: number[],
    breakpoints: string[],
    fontSizes: string[],
    colors: Colors;
  }
}

const globalTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40rem', '60rem', '70rem', '110rem'],
  fontSizes: ['13px', '16px']
}

export const themes: Themes = {
  dark: { ...globalTheme, colors: { ...themeDark } },
  light: { ...globalTheme, colors: { ...themeLight } }
}
