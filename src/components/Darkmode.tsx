import { useState } from 'react'
import { toggleDark } from '../store/darkmode'

import Button from '@common/ui/button'

import DarkIcon from '../icons/DarkIcon'
import LightIcon from '../icons/LightIcon'

const DarkMode = () => {
  const [darkToggle, setDarkToggle] = useState<boolean>(() => {
    const theme = localStorage.getItem('darkmode') || 'light'

    return theme === 'dark'
  })

  const handlerTheme = (): void => {
    setDarkToggle(prev => !prev)
    toggleDark()
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
