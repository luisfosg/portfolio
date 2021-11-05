/* eslint-disable camelcase */
import Image from 'next/image'
import Link from 'next/link'

import { ArticleContainer, ImageWrapper, ArticleTag } from './article.styles'
import { BlogType } from 'hooks/useBlogs'

const Article = ({ title, id, description, tag_list, cover_image }: BlogType) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <a>
        <ArticleContainer>
          <ImageWrapper>
            <Image src={cover_image} layout="fill" alt={title} priority/>
          </ImageWrapper>
          <h1>{ title }</h1>
          {
            tag_list && tag_list.map((tag: string) => {
              if (tag === 'spanish') return null
              return (
                <ArticleTag key={tag}>#{ tag }</ArticleTag>
              )
            })
          }
          <p>{ description }</p>
        </ArticleContainer>
      </a>
    </Link>
  )
}

export default Article
