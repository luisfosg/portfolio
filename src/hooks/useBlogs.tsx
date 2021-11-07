/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { getBlogs } from 'services/blogs'
import useTranslation from 'next-translate/useTranslation'

export type BlogType = {
  id: number,
  title: string,
  description: string,
  tag_list: string[],
  cover_image: string,
  canonical_url: string,
  body_html: string,
  body_markdown: string,
}

export type BlogProps = {
  posts: BlogType[]
}

const useBlogs = (posts: BlogType[]) => {
  const { lang } = useTranslation()
  const [allBlogs] = useState<BlogType[]>(posts)

  const [blogs, setBlogs] = useState<BlogType[] | []>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchBlogs = async () => {
      const blogsGets = await getBlogs(lang, allBlogs)

      setBlogs(blogsGets)
      setLoading(false)
    }
    fetchBlogs()
  }, [lang, allBlogs])

  return { blogs, loading }
}

export default useBlogs
