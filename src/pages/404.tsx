import useTranslation from 'next-translate/useTranslation'
import { Container } from 'components/content/content.styles'

const NotFound = () => {
  const { t } = useTranslation('404')

  return (
    <>
      <Container>
        <h1>404 | { t('notFound') }</h1>
      </Container>
    </>
  )
}

export default NotFound
