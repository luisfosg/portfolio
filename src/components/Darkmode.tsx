import { useState } from 'react'
import { toggleDark } from '../store/darkmode';

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
            ? (
              <>
                {/* <Icon class="w-6 h-6" name='openmoji:new-moon-face'></Icon> */}
                <span>Dark</span>
              </>
            )
            : (
              <>
                {/* <Icon class="w-6 h-6" name='openmoji:new-moon-face'></Icon> */}
                <span>Light</span>
              </>
            )
        }
      </div>
    </li>
  )
}

export default DarkMode
