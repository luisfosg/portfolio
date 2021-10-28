import { ReactNode } from 'react'

import {
  LayoutProps,
  ColorProps,
  SpaceProps
} from 'styled-system'

export type WithChildren<T = {}> =
T & { children?: ReactNode };

export interface SystemProps extends LayoutProps, ColorProps, SpaceProps {}

export const addOpacity = (color: string, opacity: number) => {
  const opacityHex = Math.round(opacity * 255).toString(16)
  return `${color}${opacityHex}`
}
