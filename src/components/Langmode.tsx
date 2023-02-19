import { useState } from 'react'

import Button from '@common/ui/button'

import EnIcon from '../icons/EnIcon'
import EsIcon from '../icons/EsIcon'

const Langmode = () => {
  const [lang, setLang] = useState(() => {
    return window.location.pathname.startsWith('/en') ? 'es' : 'en'
  })

  const handleLang = () => {
    const pathname = window.location.pathname.toLowerCase()
    const newLang = lang === 'es' ? 'en' : 'es'

    const redirect = pathname.includes('en') ? pathname.replace('/en', '') : `/en${pathname}`

    if (redirect === '') {
      return window.location.href = '/'
    }

    window.location.href = redirect
    setLang(newLang)
  }

  return (
    <li>
      <Button onclick={handleLang}>
        {lang === 'en' ? <EnIcon /> : <EsIcon />}
      </Button>
    </li>
  )
}

export default Langmode
