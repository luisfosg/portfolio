import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import Articles from 'components/Articles'

const Blog = ({ posts }: any) => {
  const { t } = useTranslation('blog')

  return (
    <>
      <Head>
        <title>Blog | LuisFOsG</title>
      </Head>
      <h1>{ t('title') }</h1>
      <Articles posts={posts} />
    </>
  )
}

export async function getStaticProps () {
  let posts: any = {}

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog`)
    posts = await res.json()
  } catch (error) {}

  return {
    props: {
      posts
    },
    revalidate: 1200
  }
}

export default Blog
