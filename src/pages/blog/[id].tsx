import { GetStaticPaths, GetStaticProps } from 'next'
import { parse } from 'marked'

import { getBlogId } from 'services/blogs'
import { BlogType } from 'hooks/useBlogs'

import { PostBody } from 'styles/blog.style'

type BlogIdProps = {
  blog: BlogType
}

const BlogId = ({ blog }: BlogIdProps) => {
  let html = ''

  try {
    html = parse(blog.body_markdown)
  } catch (error) {
    html = '<h1>Error</h1>'
  }

  return (
    <>
      <PostBody dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let blogs: any = {}
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
    blogs = await res.json()
  } catch (error) {
    console.log(error)
  }

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
