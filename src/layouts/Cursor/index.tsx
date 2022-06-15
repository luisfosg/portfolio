import { useState, useEffect } from 'react'
import { CursorStyle } from './Cursor.style'

const Cursor = () => {
  const [isVisible, setVisibility] = useState(false)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: MouseEvent) => {
    setVisibility(true)
    setTransform(`translate(${e.x + 30}px,${e.y - 30}px)`)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <CursorStyle isVisible={isVisible} transform={transform} />
  )
}

export default Cursor
