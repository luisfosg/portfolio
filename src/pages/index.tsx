/* eslint-disable camelcase */
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'

import {
  AwesomeSquare,
  Square,
  Square2,
  HiContent,
  Description,
  ImageWrapper
} from 'styles/index.style'
import { AncordStyled } from 'components/Button/button.styles'

type User = {
  name?: string,
  avatar_url?: string
}

const Home: NextPage = () => {
  const { t } = useTranslation()
  const [user, setUser] = useState<User>({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.github.com/users/luisfosg')
      const res = await data.json()
      setUser(res)
    }

    fetchData()
  }, [])

  return (
    <>
      <AwesomeSquare>
        <Square radius="2rem" width="60%" opacity={0.1} />
        <Square2 radius="2rem" width="60%" opacity={0.1} />
        <HiContent>
          <Description>
            <h1>Luis Osorio</h1>
            <h2>{ t('index:subtitle') }</h2>
            <p>
              { t('index:description1') }<br /><br />{ t('index:description2') }
            </p>
            <Link href="/about" passHref>
              <AncordStyled isBackground>{ t('index:getStarted') }</AncordStyled>
            </Link>
          </Description>
          <ImageWrapper>
            <Image
              src="https://i.imgur.com/6EopE0j.jpg"
              layout="fill"
              alt={ user.name ? user.name : 'loading' }
              priority
            />
          </ImageWrapper>
        </HiContent>
      </AwesomeSquare>
    </>
  )
}

export default Home
