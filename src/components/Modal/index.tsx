import { useRef, MouseEvent } from 'react'
import ReactDOM from 'react-dom'

import { WithChildren } from 'utils/index'

import { ModalContainer, ModalSection, CloseMoldalButton, ModalContent } from './modal.styles'

type ModalProps = WithChildren<{
  show: boolean
  onClose: () => void
}>

const Modal = ({ show, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  if (!show) return null

  const handleClose = () => onClose()
  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      handleClose()
    }
  }

  const htmlModal = (
    <ModalContainer ref={modalRef} onClick={closeModal}>
      <ModalSection>
        <CloseMoldalButton onClick={handleClose}>✖</CloseMoldalButton>
        <ModalContent>
          { children }
        </ModalContent>
      </ModalSection>
    </ModalContainer>
  )

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return htmlModal
  return ReactDOM.createPortal(htmlModal, modalRoot)
}

export default Modal
