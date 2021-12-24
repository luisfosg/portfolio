import { useContext, useState, useEffect } from 'react'
import ThemeContext from 'context/ThemeContext'

const useDarkMode = () => {
  const [mounted, setMounted] = useState(false)
  const { toggleTheme, theme } = useContext(ThemeContext)

  useEffect(() => {
    const lsTheme = window.localStorage.getItem('theme')
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    lsTheme ? toggleTheme(lsTheme) : toggleTheme(isDark ? 'dark' : 'light')
    setMounted(true)
  }, [toggleTheme])

  return {
    toggleTheme,
    mounted,
    theme
  }
}

export default useDarkMode
