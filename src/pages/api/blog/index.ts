import type { NextApiRequest, NextApiResponse } from 'next'

import { BlogType } from 'hooks/useBlogs'
import { getBlog } from 'services/blogs'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const url = 'https://dev.to/api/articles/me'

  const resData = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': `${process.env.API_KEY_DEVTO}`,
      'User-Agent': '*'
    }
  })
  const blogs = await resData.json()
  if (!blogs) return res.status(404).json({ data: 'Not found' })

  const resBlogs: BlogType[] = []
  await Promise.all(
    blogs.map(async (item: BlogType) => {
      if (!item.id) return
      resBlogs.push(await getBlog(item.id.toString()))
    })
  )

  const sortBlogs: any = {}
  resBlogs.forEach((item) => {
    if (!item.collection_id) return

    if (sortBlogs[item.collection_id]) {
      sortBlogs[item.collection_id].push(item)
    } else {
      sortBlogs[item.collection_id] = [item]
    }
  })

  res.status(200).json(sortBlogs)
}

export default handler
