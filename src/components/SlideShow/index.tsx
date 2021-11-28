import Image from 'next/image'

import RightIcon from '../Icons/right'
import LeftIcon from '../Icons/left'

import { ContentSlides, ContentSlide, Slide } from './slideShow.styles'

const SlideShow = () => {
  return (
    <ContentSlides>
      <div>
        <ContentSlide>
          <Slide>
            <Image src="https://i.imgur.com/LCpdckK.png" width="500" height="500" alt="Image"/>
          </Slide>
          <Slide>
            <Image src="https://i.imgur.com/vk95jFJ.png" width="500" height="500" alt="Image"/>
          </Slide>
          <Slide>
            <Image src="https://i.imgur.com/LCpdckK.png" width="500" height="500" alt="Image"/>
          </Slide>
          <Slide>
            <Image src="https://i.imgur.com/vk95jFJ.png" width="500" height="500" alt="Image"/>
          </Slide>
        </ContentSlide>
        <button>
          <LeftIcon/>
        </button>
        <button>
          <RightIcon/>
        </button>
      </div>
    </ContentSlides>
  )
}

export default SlideShow
