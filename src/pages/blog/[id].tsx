import { GetStaticPaths, GetStaticProps } from 'next'
import { parse } from 'marked'

import { getBlog } from 'services/blogs'
import { BlogType } from 'hooks/useBlogs'

import { PostBody } from 'styles/blog.style'

import json from '../../../i18n.json'

type BlogIdProps = {
  blog: BlogType
}

const BlogId = ({ blog }: BlogIdProps) => {
  const html = parse(blog.body_markdown)

  return (
    <>
      <PostBody dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let blogs: BlogType[] = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
    blogs = await res.json()
  } catch (error) {
    console.log(error)
  }

  if (!blogs || blogs.length === 0) {
    return {
      paths: [],
      fallback: false
    }
  }

  let paths: (string | { params: { id: string; }; locale: string; })[] = []
  json.locales.forEach((locale) => {
    paths = [
      ...paths,
      ...blogs.map((blog) => ({
        params: {
          id: blog.id.toString()
        },
        locale
      }))
    ]
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id || ''
  if (typeof id !== 'string') throw new Error('Invalid id')
  const blog = await getBlog(id)

  return {
    props: {
      blog
    },
    revalidate: 1200
  }
}

export default BlogId
