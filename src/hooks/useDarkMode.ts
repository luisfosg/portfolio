import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const lsTheme = window.localStorage.getItem('theme')
    lsTheme ? setTheme(lsTheme) : setMode('light')
  }, [])

  const setMode = (mode: string): void => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme: Function = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  return {
    theme,
    toggleTheme
  }
}
