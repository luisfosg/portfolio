import { useState, useEffect } from 'react'
import { toggleDark } from '../store/darkmode'

import Button from '@common/ui/button'

import DarkIcon from '../icons/DarkIcon'
import LoadThemeIcon from '../icons/LoadTheme'
import LightIcon from '../icons/LightIcon'

const DarkMode = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [darkToggle, setDarkToggle] = useState<boolean>(() => {
    const theme = localStorage.getItem('theme') || 'light'

    return theme === 'dark'
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlerTheme = (): void => {
    setDarkToggle(prev => !prev)
    toggleDark()
  }

  if (!isMounted) {
    return (
      <li >
        <Button onclick={() => {}}>
          <LoadThemeIcon />
        </Button>
      </li>
    )
  }

  return (
    <li >
      <Button onclick={handlerTheme}>
        {
          darkToggle
            ? <LightIcon />
            : <DarkIcon />
        }
      </Button>
    </li>
  )
}

export default DarkMode
