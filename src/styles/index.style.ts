import styled from 'styled-components'

import { addOpacity } from 'utils'

type SquareProps = {
  radius: string,
  width: string,
  opacity: number,
}

export const Square = styled.div<SquareProps>`
  position: absolute;

  top: 0;
  left: 0;

  min-width: ${({ width }) => width};
  min-height: 100%;

  border-radius: ${({ radius }) => radius} 0 0 ${({ radius }) => radius};
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background-color: ${props => addOpacity(props.theme.colors.nord11, props.opacity)};

  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 95%;
  }
`

export const Square2 = styled.div<SquareProps>`
  position: absolute;

  top: 0;
  left: 0;

  min-width: ${({ width }) => width};
  min-height: 100%;

  border-radius: ${({ radius }) => radius} 0 0 0;
  clip-path: polygon(0 0, 52% 52%, 100% 0);
  background-color: ${props => addOpacity(props.theme.colors.nord12, props.opacity)};

  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    min-width: 94%;
  }
`
