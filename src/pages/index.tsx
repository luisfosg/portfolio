/* eslint-disable camelcase */
import type { NextPage } from 'next'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'

import { HiContent, Description, ImageWrapper } from 'styles/index.style'

type User = {
  name?: string,
  avatar_url?: string
}

const Home: NextPage = () => {
  const { t } = useTranslation('common')
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
          <Image src="/images/loading.svg" width="150" height="50" alt="loading"/>
          <h1>{ t('construction') }</h1>
          <p className="prototype">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus asperiores cum dicta, distinctio consectetur eos iste, nihil quo, aspernatur provident facere. Aliquam, doloribus repellendus voluptatum, ipsam reprehenderit alias tempore quod perferendis ipsum eaque corporis quo incidunt suscipit illo, cum pariatur architecto beatae vero. Ipsam non laudantium dolores architecto labore sunt illo animi temporibus, aliquam rerum ducimus tempore minima incidunt et numquam ullam! Error voluptatibus ullam labore. Nulla quidem ex praesentium tempore blanditiis, maiores architecto autem laboriosam provident dignissimos ducimus non placeat, libero molestias porro eligendi corrupti, tenetur quo dicta quasi incidunt quia dolorum doloremque! Harum reiciendis at ratione porro. <br />
          </p>
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
    </>
  )
}

export default Home
