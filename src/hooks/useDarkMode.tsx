import { useContext, useState, useEffect } from 'react'
import ThemeContext from 'context/ThemeContext'

const useDarkMode = () => {
  const [mounted, setMounted] = useState(false)
  const { toggleTheme, theme } = useContext(ThemeContext)

  useEffect(() => {
    const lsTheme = window.localStorage.getItem('theme')
    lsTheme ? toggleTheme(lsTheme) : toggleTheme('light')
    setMounted(true)
  }, [toggleTheme])

  return {
    toggleTheme,
    mounted,
    theme
  }
}

export default useDarkMode
