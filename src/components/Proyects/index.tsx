import useTranslation from 'next-translate/useTranslation'

import Proyect from 'components/Proyect'

import { MY_PROYECTS } from './proyects'
import { ProyectSection, Title } from './proyects.styles'

const Proyects = () => {
  const { t, lang } = useTranslation('index')

  const theLang = lang === 'es' ? 'es' : 'en'

  return (
    <ProyectSection>
      <Title>{ t('proyects') }</Title>
      {
        MY_PROYECTS.map(proyect => (
          <Proyect
            key={ proyect.id }
            id={ proyect.id }
            title={ proyect.title }
            image={ proyect.image }
            desc={ proyect.desc[theLang] }
          />
        ))
      }
    </ProyectSection>
  )
}

export default Proyects
