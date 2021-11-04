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
}

const useBlogs = () => {
  const { lang } = useTranslation()
  const [blogs, setBlogs] = useState<BlogType[] | []>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchBlogs = async () => {
      const blogs = await getBlogs(lang)

      setBlogs(blogs)
      setLoading(false)
    }
    fetchBlogs()
  }, [lang])

  return { blogs, loading }
}

export default useBlogs
