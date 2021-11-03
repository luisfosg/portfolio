/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { getBlogs } from 'services/blogs'

export type BlogType = {
  id: number,
  title: string,
  description: string,
  tag_list: string[],
  cover_image: string,
  canonical_url: string,
}

const useBlogs = () => {
  const [blogs, setBlogs] = useState<BlogType[] | []>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchBlogs = async () => {
      const blogs = await getBlogs()

      setBlogs(blogs)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  return { blogs, loading }
}

export default useBlogs
