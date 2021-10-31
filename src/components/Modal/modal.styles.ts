import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalSection = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.nord5};
  width: 80%;
  min-height: 50%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CloseMoldalButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;

  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.nord7};

  &:hover {
    color: ${({ theme }) => theme.colors.nord8};
  }

  user-select: none;
`
