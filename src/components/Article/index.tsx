/* eslint-disable camelcase */
import Image from 'next/image'

import { ArticleContainer, ImageWrapper } from './article.styles'
import { BlogType } from 'hooks/useBlogs'

const Article = ({ title, description, cover_image }: BlogType) => {
  return (
    <ArticleContainer>
      <ImageWrapper>
        <Image src={cover_image} layout="fill" alt={title} priority/>
      </ImageWrapper>
      <h1>{ title }</h1>
      <p>{ description }</p>
    </ArticleContainer>
  )
}

export default Article
