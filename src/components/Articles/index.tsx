import useBlogs from 'hooks/useBlogs'

import Article from '../Article'

import { ArticlesContainer } from './articles.styles'

const Articles = () => {
  const { blogs, loading } = useBlogs()

  if (loading) return <h3>Loading...</h3>
  if (blogs.length < 1) return <h3>No blogs found</h3>
  return (
    <ArticlesContainer>
      {
        blogs.map(blog => <Article
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          tag_list={blog.tag_list}
          canonical_url={blog.canonical_url}
          cover_image={blog.cover_image}
        />)
      }
    </ArticlesContainer>
  )
}

export default Articles
