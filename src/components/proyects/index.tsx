import Image from 'next/image'

import { ProyectSection } from './proyects.styles'

const Proyects = () => {
  return (
    <ProyectSection>
      <h1>Proyectos</h1>
      <div>
        <div><Image src="/images/loading.svg" width={400} height={300} alt="Imagen de prueba" /></div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.
        </div>
      </div>
    </ProyectSection>
  )
}

export default Proyects
