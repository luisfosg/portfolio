import Image from 'next/image'

import {
  Proyect,
  ImageContainer,
  InfoProyect,
  ContainerTitle,
  TitleMark,
  TitleWave
} from './proyect.styles'

type ProyectsProps = {
  id: number
  title: string
  image: string
  desc: string
}

const ProyectComponent = ({ id, title, image, desc }: ProyectsProps) => {
  if (id % 2 !== 0) {
    return (
      <Proyect>
        <ImageContainer>
          <Image src={ image } alt={ title } layout="fill" />
        </ImageContainer>
        <InfoProyect>
          <ContainerTitle>
            <TitleMark>{ title.toUpperCase() }</TitleMark>
            <TitleWave>{ title.toUpperCase() }</TitleWave>
          </ContainerTitle>
          <p>{ desc }</p>
        </InfoProyect>
      </Proyect>
    )
  }

  return (
    <Proyect>
      <InfoProyect>
        <ContainerTitle>
          <TitleMark>{ title.toUpperCase() }</TitleMark>
          <TitleWave>{ title.toUpperCase() }</TitleWave>
        </ContainerTitle>
        { desc }
      </InfoProyect>
      <ImageContainer>
        <Image src={ image } layout='fill' alt={ title } />
      </ImageContainer>
    </Proyect>
  )
}

export default ProyectComponent
