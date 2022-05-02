import { ProyectSection, Title } from './proyects.styles'
import Proyect from 'components/Proyect'

const MY_PROYECTS = [
  {
    id: 1,
    title: 'UNIMAPZ',
    image: 'https://i.imgur.com/ys2TF5l.png',
    desc: 'Mapa del Instituto Universitario de la Paz - UNIPAZ, proyecto de aula y trabajo colaborativo. Usamos Leaflet y Open Street Map para el desarrollo de esta página web.'
  },
  {
    id: 2,
    title: 'HOME TAB',
    image: 'https://i.imgur.com/gsHGza2.png',
    desc: 'Tu nueva pestaña de Inicio de tu Navegador; rapida, personalizable y cómoda.'
  },
  {
    id: 3,
    title: 'Cold Chat',
    image: 'https://i.imgur.com/6ZR35Tn.png',
    desc: 'Chat con Actualización en tiempo real, conectate con tus amigos, y habla con ellos. Como si fuera una aplicacíon más de mensajeria.'
  },
  {
    id: 4,
    title: 'SHORT URL',
    image: 'https://github.com/LuisFOsG/Short-Url/raw/main/doc/banner.png',
    desc: 'Un Acortador de URL y Generador de Codigos QR. controla tus enlaces, cuenta las visitas, colocales contraseña o limita las visitas a tus usuarios.'
  }
]

const Proyects = () => {
  return (
    <ProyectSection>
      <Title>Proyectos</Title>
      {
        MY_PROYECTS.map(proyect => (
          <Proyect
            key={ proyect.id }
            id={ proyect.id }
            title={ proyect.title }
            image={ proyect.image }
            desc={ proyect.desc }
          />
        ))
      }
    </ProyectSection>
  )
}

export default Proyects
