import type { NextApiRequest, NextApiResponse } from 'next'

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
  const data = await resData.json()

  if (!data) return res.status(404).json({ data: 'Not found' })
  res.status(200).json(data)
}

export default handler
