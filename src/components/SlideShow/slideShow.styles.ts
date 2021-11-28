import styled from 'styled-components'

export const ContentSlides = styled.section`
  min-width: 100%;
  min-height: 100%;

  overflow: hidden;
`

export const ContentSlide = styled.div`
  min-width: 100%;
  min-height: 100%;

  display: flex;
  flex-wrap: nowrap;
`

export const Slide = styled.div`
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;

  overflow: hidden;
  transition: .3s ease all;

  span {
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;

    img {
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  z-index: 1;
`
