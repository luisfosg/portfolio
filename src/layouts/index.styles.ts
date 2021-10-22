import styled from 'styled-components'
import {
  space,
  layout,
  color,
  compose
} from 'styled-system'

import { SystemProps } from 'utils'

export const Title = styled.h1<SystemProps>`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }

  user-select: none;
  ${compose(space, layout, color)}
`

export const Link = styled.a<SystemProps>`
  ${compose(space, layout, color)}
`
