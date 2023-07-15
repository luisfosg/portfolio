import { atom } from 'nanostores';

const NORMALIZE_THEME = {
  0: 'light',
  1: 'dark'
}

const theme = localStorage.getItem('theme') || NORMALIZE_THEME[0]
const isDark = atom(theme)

export const toggleDark = () => {
  const oldState = isDark.get()
  const newState = oldState === 'light' ? NORMALIZE_THEME[1] : NORMALIZE_THEME[0]

  isDark.set(newState)
  localStorage.setItem('theme', newState)

  if (newState === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
}
