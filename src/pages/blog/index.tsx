import useTranslation from 'next-translate/useTranslation'

import Articles from 'components/Articles'

import { BlogProps, BlogType } from 'hooks/useBlogs'

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
  let posts: BlogType[] = []

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
    posts = await res.json()
  } catch (error) {
    console.log(error)
    return {
      props: {
        posts: []
      },
      revalidate: 1200
    }
  }

  return {
    props: {
      posts
    },
    revalidate: 1200
  }
}

export default Blog
