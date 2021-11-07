import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const url = 'https://dev.to/api/articles/me'
  const resData = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': `${process.env.API_KEY_DEVTO}`
    }
  })
  const data = await resData.json()

  res.status(200).json(data)
}

export default handler
