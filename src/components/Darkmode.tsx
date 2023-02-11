import { useState } from 'react'
import { toggleDark } from '../store/darkmode'

import DarkIcon from '../icons/DarkIcon'
import LightIcon from '../icons/LightIcon'

const DarkMode = () => {
  const [darkToggle, setDarkToggle] = useState(() => {
    const theme = localStorage.getItem('darkmode') || 'light'

    return theme === 'dark'
  })

  const handlerTheme = () => {
    setDarkToggle(prev => !prev)
    toggleDark()
  }

  return (
    <li >
      <div
        className="flex items-center justify-center cursor-pointer bg-slate-200/20 rounded-lg p-2 mx-2"
        onClick={handlerTheme}
      >
        {
          darkToggle
            ? <LightIcon />
            : <DarkIcon />
        }
      </div>
    </li>
  )
}

export default DarkMode
