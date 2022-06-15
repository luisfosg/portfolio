import styled from 'styled-components'
import { addOpacity } from 'utils'

type cursorProps = {
  isVisible?: boolean,
  transform?: string,
}

export const CursorStyle = styled.div<cursorProps>`
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 45px;
  height: 45px;

  pointer-events: none;
  z-index: 9999;

  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

  transition: transform 2s cubic-bezier(.02,1.2,.8,1), opacity .25s ease;
  animation: 10s infinite bgcolorchange;
  transform: ${props => props.transform};

  @keyframes bgcolorchange {
    0% {
      background-color: ${({ theme }) => addOpacity(theme.colors.nord13, 0.1)};
    }

    50% {
      background-color: ${({ theme }) => addOpacity(theme.colors.nord15, 0.1)};
    }

    100% {
      background-color: ${({ theme }) => addOpacity(theme.colors.nord13, 0.1)};
    }
  }

`
