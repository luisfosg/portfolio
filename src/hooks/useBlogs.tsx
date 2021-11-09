/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { getBlogs } from 'services/blogs'
import useTranslation from 'next-translate/useTranslation'

export type BlogType = {
  id?: number,
  title: string,
  description: string,
  readable_publish_date: string,
  reading_time_minutes: number,
  tags: string[],
  cover_image: string,
  canonical_url: string,
  body_markdown: string,
  collection_id: number,
}

const useBlogs = (posts: any) => {
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
