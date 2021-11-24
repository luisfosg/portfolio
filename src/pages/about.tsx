import Head from 'next/head'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import { PostBody, ImageContainer, InfoWrapper, Title } from 'styles/blog.style'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <>
      <Head>
        <title>{ t('title') }</title>
      </Head>
      <ImageContainer>
        <Image src="https://i.imgur.com/S0LL2KM.jpg" layout="fill" alt="About" priority/>
      </ImageContainer>
      <InfoWrapper>
        <Title>{ t('title') }</Title>
      </InfoWrapper>
      <PostBody>
        <h2>{ t('subtitle1') }</h2>
        <p>{ t('description1') }</p>

        <h2>{ t('subtitle2') }</h2>
        <p>{ t('description2') }</p>
        <ImageContainer>
          <Image src="https://i.imgur.com/sCE4YuV.png" alt="Code" layout="fill" />
        </ImageContainer>

        <h2>{ t('subtitle3') }</h2>
        <p>{ t('description3') }<strong>{ t('strong1') }</strong></p>

        <h2>{ t('subtitle4') }</h2>
        <p>{ t('description4') }<strong>{ t('strong2') }</strong>{ t('description4-1') }</p>
        <ImageContainer>
          <Image src="https://i.imgur.com/dk8Hekr.jpg" alt="Code" layout="fill" />
        </ImageContainer>

        <h2>{ t('subtitle5') }</h2>
        <em>{ t('em1') }</em>
        <p>{ t('description5') }<a href="https://www.youtube.com/c/Programaci%C3%B3nATS/videos" target="_blank" rel="noreferrer">{ t('a1') }</a>{ t('description5-1') }</p>
        <p>{ t('description5-2') }<strong>{ t('strong3') }</strong>{ t('description5-3') }</p>

        <ImageContainer>
          <Image src="https://i.imgur.com/tgzu96b.png" alt="Code" layout="fill" />
        </ImageContainer>
        <em>{ t('em2') }</em>

        <h2>{ t('subtitle6') }</h2>
        <p>{ t('description6') }</p>

        <h2>{ t('subtitle7') }</h2>
        <p>{ t('description7') }</p>

        <ImageContainer>
          <Image src="https://i.imgur.com/vk95jFJ.png" alt="Code" layout="fill" />
        </ImageContainer>

        <p>{ t('description7-1') }</p>
      </PostBody>
    </>
  )
}

export default About
