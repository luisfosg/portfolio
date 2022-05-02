/* import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react' */

import Proyects from 'components/Proyects'

/* type User = {
  name?: string,
  avatar_url?: string
} */

const Home = () => {
  /* const { t } = useTranslation()
  const [user, setUser] = useState<User>({}) */

  /* useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.github.com/users/luisfosg')
      const res = await data.json()
      setUser(res)
    }

    fetchData()
  }, []) */

  return (
    <Proyects/>
  )
}

export default Home
