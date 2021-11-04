import { BlogType } from 'hooks/useBlogs'

export const getBlogs = async (lang: string) => {
  const language = lang === 'es' ? 'spanish' : ''

  const res = await fetch('https://dev.to/api/articles?username=luisfosg')
  const data = await res.json()

  if (language !== 'spanish') {
    return data.filter((item: BlogType) => !item.tag_list.includes('spanish'))
  }
  return data.filter((item: BlogType) => item.tag_list.includes(language))
}
