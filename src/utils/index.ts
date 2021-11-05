import { ReactNode } from 'react'

export type WithChildren<T = {}> =
T & { children?: ReactNode };

export const addOpacity = (color: string, opacity: number) => {
  const opacityHex = Math.round(opacity * 255).toString(16)
  return `${color}${opacityHex}`
}
