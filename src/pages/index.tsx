/* eslint-disable camelcase */
import type { NextPage } from 'next'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'

import SlideShow from 'components/SlideShow'

import {
  HiContent,
  Description,
  ImageWrapper,
  LastContent,
  Video,
  Content,
  LastContentGrid
} from 'styles/index.style'

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
      <HiContent>
        <Description>
          <Image src="/images/loading.svg" layout="fill" alt="loading"/>
          <h1>{ t('index:subtitle') }</h1>
          <p>
            { t('index:description1') }<br /><br />{ t('index:description2') }
          </p>
          <h2>{ t('index:getStarted') }</h2>
        </Description>
        <ImageWrapper>
          <Image
            src={ user.avatar_url ? user.avatar_url : '/images/loading.svg' }
            layout="fill"
            alt={ user.name ? user.name : 'loading' }
            priority
          />
        </ImageWrapper>
      </HiContent>

      <LastContent>
        <h2>{ t('index:lastContent') }</h2>
        <LastContentGrid>
          <Content>
            <Video
              src="https://www.youtube.com/embed/4dSrEW0doyw"
              title="Coding With LuisFOsG"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
            />
            <p>{ t('index:descriptionVideo') }</p>
          </Content>
          <Content>
            <SlideShow/>
          </Content>
        </LastContentGrid>
      </LastContent>
    </>
  )
}

export default Home
