import useTranslation from 'next-translate/useTranslation'

import useBlogs from 'hooks/useBlogs'

import Article from '../Article'

import { ArticlesContainer } from './articles.styles'

const Articles = ({ posts }: any) => {
  const { t } = useTranslation('blog')
  const { blogs, loading } = useBlogs(posts)

  if (loading) return <h3>{ t('loading') }</h3>
  if (blogs.length < 1) return <h3>{ t('notFound') }</h3>

  return (
    <ArticlesContainer>
      {
        blogs.map(blog => <Article
          key={blog.id}
          title={blog.title}
          description={blog.description}
          readable_publish_date={blog.readable_publish_date}
          reading_time_minutes={blog.reading_time_minutes}
          collection_id={blog.collection_id}
          tags={blog.tags}
          cover_image={blog.cover_image}
        />)
      }
    </ArticlesContainer>
  )
}

export default Articles
