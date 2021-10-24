import styled from 'styled-components'
import {
  space,
  layout,
  color,
  compose
} from 'styled-system'

import { SystemProps } from 'utils'

export const FooterContainer = styled.div<SystemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;

  ${compose(space, layout, color)}
`
