import { useState, useEffect } from 'react'

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const logit = () => {
      setScrollY(window.pageYOffset)
    }

    const watchScroll = () => {
      window.addEventListener('scroll', logit)
    }

    watchScroll()

    return () => {
      window.removeEventListener('scroll', logit)
    }
  }, [scrollY])

  return {
    scrollY
  }
}

export default useScroll
