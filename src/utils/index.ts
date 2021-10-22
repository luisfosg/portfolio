import { ReactNode } from 'react'

import {
  LayoutProps,
  ColorProps,
  SpaceProps
} from 'styled-system'

export type WithChildren<T = {}> =
T & { children?: ReactNode };

export interface SystemProps extends LayoutProps, ColorProps, SpaceProps {}
