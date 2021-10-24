import styled from 'styled-components'
import {
  space,
  layout,
  color,
  compose
} from 'styled-system'
import { SystemProps } from 'utils'

export const Content = styled.div<SystemProps>`
  width: 90%;
  margin: 0 auto;
  padding: 0 1.5em;

  padding: unset;
  ${compose(space, layout, color)}
`

export const ContentBox = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled(Content)`
  min-height: 51.3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
