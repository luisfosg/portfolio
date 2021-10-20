import { useRouter } from 'next/router'
import Link from 'next/link'

import Toggle from 'components/Toggle'
import useDarkMode from 'hooks/useDarkMode'

const Header = () => {
  const router = useRouter()
  const { theme, toggleTheme } = useDarkMode()

  return (
    <>
      <Toggle toggle={theme === 'dark'} setToggle={toggleTheme} />
      <ul>
        {
          router.locales?.map(locale => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale} ><a>{ locale }</a></Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Header
