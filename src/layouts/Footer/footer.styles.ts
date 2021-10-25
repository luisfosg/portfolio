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
  min-height: 25vh;

  ${compose(space, layout, color)}
`

export const SectionFooter = styled.section<SystemProps>`
  width: 100%;
  padding-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.colors.nord7};

  ${compose(space, layout, color)}
`

export const FooterLink = styled.a<SystemProps>`
  margin: 0.3rem 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.nord8};
  }

  ${compose(space, layout, color)}
`
