import useTranslation from 'next-translate/useTranslation'

import Articles from 'components/Articles'

import { BlogProps } from 'hooks/useBlogs'

const Blog = ({ posts }: BlogProps) => {
  const { t } = useTranslation('blog')

  return (
    <>
      <h1>{ t('title') }</h1>
      <Articles posts={posts} />
    </>
  )
}

export async function getStaticProps () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
  const posts = await res.json()

  return {
    props: {
      posts
    },
    revalidate: 1200
  }
}

export default Blog
