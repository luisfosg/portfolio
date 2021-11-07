import Articles from 'components/Articles'
import useTranslation from 'next-translate/useTranslation'

const Blog = () => {
  const { t } = useTranslation('blog')

  return (
    <>
      <h1>{ t('title') }</h1>
      <Articles/>
    </>
  )
}

export default Blog
