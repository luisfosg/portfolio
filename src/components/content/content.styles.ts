import styled from 'styled-components'
import { color } from 'styled-system'

type ContainerProps = {
  centered?: boolean
}

export const Content = styled.div<ContainerProps>`
  width: 100%;
  margin: ${({ centered }) => centered && '0 auto'};
  padding: 0 1.5em;

  max-width: ${({ theme }) => theme.breakpoints[3]};
  padding: unset;

  ${color}
`

export const ContentBox = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
