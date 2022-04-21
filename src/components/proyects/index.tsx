import { ProyectSection, Title } from './proyects.styles'
import Proyect from 'components/Proyect'

const MY_PROYECTS = [
  {
    id: 1,
    title: 'Titulo de Prueba',
    image: 'https://picsum.photos/400/600',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.'
  },
  {
    id: 2,
    title: 'Titulo de Prueba',
    image: 'https://picsum.photos/300/500',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.'
  },
  {
    id: 3,
    title: 'Titulo Prueba',
    image: 'https://picsum.photos/400/500',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.'
  },
  {
    id: 4,
    title: 'Titulo Prueba',
    image: 'https://picsum.photos/300/600',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.'
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
