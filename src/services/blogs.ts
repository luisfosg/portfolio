import { BlogType } from 'hooks/useBlogs'

export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
  return await res.json()
}

export const getBlogs = async (lang: string) => {
  const language = lang === 'es' ? 'spanish' : ''
  const data = await getAllBlogs()

  if (language !== 'spanish') {
    return data.filter((item: BlogType) => !item.tag_list.includes('spanish'))
  }
  return data.filter((item: BlogType) => item.tag_list.includes(language))
}

export const getBlog = async (id: string) => {
  const res = await fetch(`https://dev.to/api/articles/${id}`)
  const data = await res.json()
  return data
}
