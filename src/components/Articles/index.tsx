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
          collection_id={blog.collection_id}
          tags={blog.tags}
          canonical_url={blog.canonical_url}
          cover_image={blog.cover_image}
          body_markdown={blog.body_markdown}
        />)
      }
    </ArticlesContainer>
  )
}

export default Articles
