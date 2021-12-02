import Image from 'next/image'
import Carousel from 'react-elastic-carousel'

import { Container } from './slideShow.styles'

const items = [
  { id: 1, image: 'https://i.imgur.com/SkCEbqw.png' },
  { id: 2, image: 'https://i.imgur.com/GpzaZ6h.png' },
  { id: 3, image: 'https://i.imgur.com/ONSEjCm.png' }
]

const EmblaCarousel = () => {
  return (
    <Carousel isRTL={false} itemsToShow={1}>
      {
        items.map(item => (
          <Container key={item.id}>
            <Image src={item.image} width="400" height="400" alt={item.id.toString()} />
          </Container>
        ))
      }
    </Carousel>
  )
}

export default EmblaCarousel
