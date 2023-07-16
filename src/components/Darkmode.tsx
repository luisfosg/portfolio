import { useState, useEffect } from 'react'
import { toggleDark } from '../store/darkmode'

import Button from '@common/ui/button'

import DarkIcon from '../icons/DarkIcon'
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

  if (!isMounted) return (
    <li >
      <Button className='border rounded-full border-slate-700/0 px-1' onclick={() => {}}>
        <LightIcon />
      </Button>
    </li>
  )

  return (
    <li >
      <Button className='border rounded-full px-1 border-slate-600 dark:border-slate-500' onclick={handlerTheme}>
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
