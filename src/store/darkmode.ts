import { atom } from 'nanostores';

const NORMALIZE_THEME = {
  0: 'light',
  1: 'dark'
}

const theme = localStorage.getItem('darkmode') || NORMALIZE_THEME[0]
theme === 'dark' && document.documentElement.classList.add('dark')

export const isDark = atom(theme)

export const toggleDark = () => {
  const oldState = isDark.get()
  const newState = oldState === 'light' ? NORMALIZE_THEME[1] : NORMALIZE_THEME[0]

  isDark.set(newState)

  localStorage.setItem('darkmode', newState)
  document.documentElement.classList.toggle('dark')
}
