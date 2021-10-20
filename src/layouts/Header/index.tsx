import { useRouter } from 'next/router'
import Link from 'next/link'

import Toggle from 'components/toggle'
import Sun from 'components/icons/sun'
import Moon from 'components/icons/moon'

import useDarkMode from 'hooks/useDarkMode'

const Header = () => {
  const router = useRouter()
  const { theme, toggleTheme } = useDarkMode()

  const isDark = theme === 'dark'
  return (
    <>
      <label>
        {isDark ? <Sun fill="#fff"/> : <Moon/>}
        <Toggle toggle={isDark} setToggle={toggleTheme}/>
      </label>
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
