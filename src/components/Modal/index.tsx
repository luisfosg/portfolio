import { useRef, MouseEvent } from 'react'
import { animated, useSpring } from 'react-spring'
import ReactDOM from 'react-dom'

import { WithChildren } from 'utils/index'

import { ModalContainer, ModalSection, CloseMoldalButton, ModalContent, animationModal } from './modal.styles'

type ModalProps = WithChildren<{
  show: boolean
  onClose: () => void
}>

const Modal = ({ show, onClose, children }: ModalProps) => {
  const animation = useSpring({
    ...animationModal,
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0%)' : 'translateY(-100%)'
  })

  const modalRef = useRef<HTMLDivElement>(null)
  if (!show) return null

  const handleClose = () => onClose()
  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      handleClose()
    }
  }

  const htmlModal = (
    <ModalContainer onClick={closeModal}>
      <animated.div style={animation} ref={modalRef}>
        <ModalSection>
          <CloseMoldalButton onClick={handleClose}>✖</CloseMoldalButton>
          <ModalContent>
            { children }
          </ModalContent>
        </ModalSection>
      </animated.div>
    </ModalContainer>
  )

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return htmlModal
  return ReactDOM.createPortal(htmlModal, modalRoot)
}

export default Modal
