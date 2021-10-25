import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'
import { Container } from 'components/content/content.styles'

const NotFound = () => {
  const { t } = useTranslation('404')

  return (
    <>
      <Container>
        <h1>404 | { t('notFound') }</h1>
        <Image src="https://i.imgur.com/LCpdckK.png" width="400" height="200" alt="404" />
      </Container>
    </>
  )
}

export default NotFound
