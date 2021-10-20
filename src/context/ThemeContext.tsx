import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { themes } from 'theme'
import { WithChildren } from 'utils'

type ThemeProps = WithChildren<{}>
type ThemeContextProps = {
  theme: string
  toggleTheme: Function
}

const Context = React.createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {}
})

export const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState('light')

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme: Function = (mode?: string) => {
    if (mode) return setMode(mode)
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}

export default Context
