import Toggle from 'components/Toggle'
import { useRouter } from 'next/router'
import Link from 'next/link'

type HeaderProps = {
  setThemeMode: Function,
}

const Header = ({ setThemeMode }: HeaderProps) => {
  const router = useRouter()

  return (
    <>
      <Toggle setToggle={setThemeMode} />
      {
        router.locales?.map(locale => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale} ><a>{ locale }</a></Link>
          </li>
        ))
      }
    </>
  )
}

export default Header
