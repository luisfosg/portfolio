import { BlogType } from 'hooks/useBlogs'

export const getBlogs = async (lang: string, blogs: BlogType[]) => {
  const language = lang === 'es' ? 'spanish' : ''

  if (language !== 'spanish') {
    return blogs.filter((item) => !item.tag_list.includes('spanish'))
  }
  return blogs.filter((item) => item.tag_list.includes(language))
}

export const getBlog = async (id: string) => {
  const res = await fetch(`https://dev.to/api/articles/${id}`)
  const data = await res.json()
  return data
}
