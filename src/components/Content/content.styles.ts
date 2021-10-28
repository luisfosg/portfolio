import styled from 'styled-components'
import {
  space,
  layout,
  color,
  compose
} from 'styled-system'
import { SystemProps } from 'utils'

export const Content = styled.div<SystemProps>`
  width: 85%;
  margin: 0 auto;
  padding: 0 1.5em;

  padding: unset;
  ${compose(space, layout, color)}

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const ContentBox = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled(Content)`
  min-height: calc(100vh - 7.2vh - 25vh);
`

export const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
