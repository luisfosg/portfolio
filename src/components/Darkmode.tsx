import { useState, useEffect } from 'react'

import Button from '@common/ui/button'

import DarkIcon from '../icons/DarkIcon'
import LightIcon from '../icons/LightIcon'

const DarkMode = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [darkToggle, setDarkToggle] = useState<boolean>(() => {
    const theme = localStorage?.getItem('theme') || 'light'
    return theme === 'dark'
  })

  const toggleTheme = () => {
    const t = darkToggle ? 'light' : 'dark'
    localStorage.setItem('theme', t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (!darkToggle) {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [darkToggle])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlerTheme = (): void => {
    setDarkToggle(prev => !prev)
    toggleTheme()
  }

  if (!isMounted) return (<div></div>)

  return (
    <div className='inline-flex items-center rounded-3xl bg-zinc-200/20 dark:bg-zinc-600/40 animate-fade animate-duration-400'>
      <Button onclick={handlerTheme}>
        {
          darkToggle
            ? <LightIcon />
            : <DarkIcon />
        }
      </Button>
    </div>
  )
}

export default DarkMode
