import { useState } from 'react'

import Button from '@common/ui/button'

const Langmode = () => {
  const [lang, setLang] = useState(() => {
    return window.location.pathname.includes('en') ? 'en' : 'es'
  })

  const handleLang = () => {
    const pathname = window.location.pathname.toLowerCase()
    const newLang = lang === 'es'? 'en' : 'es'

    const redirect = pathname.includes('en') ? pathname.replace('/en', '') : `/en${pathname}`

    window.location.href = redirect
    setLang(newLang)
  }

  return (
    <li>
      <Button onclick={handleLang}>
        {lang}
      </Button>
    </li>
  )
}

export default Langmode
