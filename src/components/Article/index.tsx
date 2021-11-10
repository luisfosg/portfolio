/* eslint-disable camelcase */
import Image from 'next/image'
import Link from 'next/link'

import { ArticleContainer, ImageWrapper, ArticleTag, DateRead, ArticleTitle } from './article.styles'
import { BlogType } from 'hooks/useBlogs'

const Article = ({
  title,
  description,
  tags,
  cover_image,
  collection_id,
  readable_publish_date,
  reading_time_minutes
}: BlogType) => {
  return (
    <Link href={`/blog/${collection_id}`} passHref>
      <a>
        <ArticleContainer>
          <ImageWrapper>
            <Image src={cover_image} layout="fill" alt={title} priority/>
          </ImageWrapper>
          <ArticleTitle>🔵 { title }</ArticleTitle>
          {
            tags && tags.map((tag: string) => {
              if (tag === 'spanish') return null
              return (
                <ArticleTag key={tag}>#{ tag }</ArticleTag>
              )
            })
          }
          <DateRead>• { readable_publish_date }</DateRead>
          <p>{ description }</p>
        </ArticleContainer>
      </a>
    </Link>
  )
}

export default Article
