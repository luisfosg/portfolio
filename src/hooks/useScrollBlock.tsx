import { useRef } from 'react'

const useScrollBlock = () => {
  const scroll = useRef(false)

  const blockScroll = () => {
    if (typeof document === 'undefined') return
    const { body } = document

    if (!body || !body.style || scroll.current) return
    body.style.overflow = 'hidden'

    scroll.current = true
  }

  const allowScroll = () => {
    if (typeof document === 'undefined') return
    const { body } = document

    if (!body || !body.style || !scroll.current) return
    body.style.overflow = ''

    scroll.current = false
  }

  return {
    blockScroll,
    allowScroll
  }
}

export default useScrollBlock
