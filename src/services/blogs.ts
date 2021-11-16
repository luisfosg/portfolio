import { BlogType } from 'hooks/useBlogs'

export const getBlogs = async (lang: string, blogs: any) => {
  const filterBlogs: BlogType[] = []

  for (const item of Object.keys(blogs)) {
    if (lang !== 'es') {
      filterBlogs.push(
        ...blogs[item].filter((blog: BlogType) => !blog.tags.includes('spanish'))
      )
    } else {
      filterBlogs.push(
        ...blogs[item].filter((blog: BlogType) => blog.tags.includes('spanish'))
      )
    }
  }

  return filterBlogs.sort((a: BlogType, b: BlogType) => {
    return new Date(b.edited_at || '').getTime() - new Date(a.edited_at || '').getTime()
  })
}

export const getBlog = async (id: string) => {
  const res = await fetch(`https://dev.to/api/articles/${id}`)
  return await res.json()
}

export const getBlogId = async (locale: string, id: string) => {
  let blog: BlogType[] | [] = []

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
  const blogs = await res.json()

  for (const item of Object.keys(blogs)) {
    if (item === id) {
      if (locale !== 'es') {
        blog = blogs[item].filter((blog: BlogType) => !blog.tags.includes('spanish'))
      } else {
        blog = blogs[item].filter((blog: BlogType) => blog.tags.includes('spanish'))
      }
    }
  }

  return blog[0]
}
