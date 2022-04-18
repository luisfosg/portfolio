import Image from 'next/image'

import {
  ProyectSection,
  Title,
  Proyect,
  ImageContainer,
  InfoProyect,
  ContainerTitle,
  TitleMark,
  TitleWave
} from './proyects.styles'

const Proyects = () => {
  return (
    <ProyectSection>
      <Title>Proyectos</Title>
      <Proyect>
        <ImageContainer>
          <Image src="https://picsum.photos/300/300" layout='fill' alt="Imagen de prueba" />
        </ImageContainer>
        <InfoProyect>
          <ContainerTitle>
            <TitleMark>TITULO PRUEBA</TitleMark>
            <TitleWave>TITULO PRUEBA</TitleWave>
          </ContainerTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.
        </InfoProyect>
      </Proyect>

      <Proyect>
        <InfoProyect>
          <ContainerTitle>
            <TitleMark>TITULO PRUEBA</TitleMark>
            <TitleWave>TITULO PRUEBA</TitleWave>
          </ContainerTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.
        </InfoProyect>
        <ImageContainer>
          <Image src="https://picsum.photos/300/500" layout='fill' alt="Imagen de prueba" />
        </ImageContainer>
      </Proyect>

      <Proyect>
        <ImageContainer>
          <Image src="https://picsum.photos/300/200" layout='fill' alt="Imagen de prueba" />
        </ImageContainer>
        <InfoProyect>
          <ContainerTitle>
            <TitleMark>TITULO PRUEBA</TitleMark>
            <TitleWave>TITULO PRUEBA</TitleWave>
          </ContainerTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.
        </InfoProyect>
      </Proyect>

      <Proyect>
        <InfoProyect>
          <ContainerTitle>
            <TitleMark>TITULO PRUEBA</TitleMark>
            <TitleWave>TITULO PRUEBA</TitleWave>
          </ContainerTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur fugiat quidem, error a cumque necessitatibus omnis totam reprehenderit officiis ducimus delectus sit doloremque doloribus incidunt veniam provident impedit repellat voluptate at natus perspiciatis quae deleniti. Commodi minus suscipit ipsa sint dolorem, architecto recusandae eaque, consectetur reiciendis odit rerum in.
        </InfoProyect>
        <ImageContainer>
          <Image src="https://picsum.photos/200/300" layout='fill' alt="Imagen de prueba" />
        </ImageContainer>
      </Proyect>
    </ProyectSection>
  )
}

export default Proyects
