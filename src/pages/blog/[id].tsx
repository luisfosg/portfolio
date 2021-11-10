import useTranslation from 'next-translate/useTranslation'
import { GetStaticPaths, GetStaticProps } from 'next'
import { parse } from 'marked'
import Image from 'next/image'

import { getBlogId } from 'services/blogs'
import { BlogType } from 'hooks/useBlogs'
import { formatDate } from 'utils/index'

import { PostBody, ImageContainer, InfoWrapper, Title, BlogMessage, InfoContent, DateContent } from 'styles/blog.style'
import { ArticleTag, DateRead } from 'components/Article/article.styles'

type BlogIdProps = {
  blog: BlogType
}

const BlogId = ({ blog }: BlogIdProps) => {
  const { t, lang } = useTranslation('blog')

  let html = ''

  try {
    html = parse(blog.body_markdown || '')
  } catch (error) {
    html = '<h1>Error</h1>'
  }

  return (
    <>
      <ImageContainer>
        <Image src={blog.cover_image} layout="fill" alt={blog.title} priority/>
      </ImageContainer>
      <InfoWrapper>
        <Title>{ blog.title }</Title>
        <InfoContent>
          {
            blog.tags && blog.tags.map((tag: string) => {
              if (tag === 'spanish') return null
              return (
                <ArticleTag key={tag}>#{ tag }</ArticleTag>
              )
            })
          }
          <DateContent>
            {t('posted') } <strong>{
              formatDate({ dateParser: blog.created_at || '', lang })
            }</strong> • {t('updated') } <strong>{
              formatDate({ dateParser: blog.edited_at || '', lang })
            }</strong>
          </DateContent>
          <DateRead>{
            t(blog.reading_time_minutes > 1 ? 'timeReads' : 'timeRead', {
              time: blog.reading_time_minutes
            })
          }</DateRead>
        </InfoContent>
      </InfoWrapper>
      <PostBody dangerouslySetInnerHTML={{ __html: html }} />
      <BlogMessage>
        <a target="_blank" href={ blog.canonical_url } rel="noreferrer">
          <Image src="/images/dev-to.svg" width="25" height="25" alt="dev.to" />
          <span>{ t('feedback') }</span>
        </a>
      </BlogMessage>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let blogs: any = {}
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
    blogs = await res.json()
  } catch (error) {}

  if (!blogs) {
    return {
      paths: [],
      fallback: false
    }
  }

  let paths: (string | { params: { id: string; }; locale: string; })[] = []
  for (const item of Object.keys(blogs)) {
    paths = [
      ...paths,
      ...blogs[item].map((blog: BlogType) => ({
        params: {
          id: item
        },
        locale: blog.tags.includes('spanish') ? 'es' : 'en'
      }))
    ]
  }

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const id = params?.id || ''
  if (typeof id !== 'string') throw new Error('Invalid id')
  const blog = await getBlogId(locale || '', id)

  return {
    props: {
      blog
    },
    revalidate: 1200
  }
}

export default BlogId
