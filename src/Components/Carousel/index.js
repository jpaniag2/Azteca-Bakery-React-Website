import React from 'react'
import {SliderData} from './ImageSliderData'
import ImageSlider from './ImageSlider';
import { CarouselContainer } from './CarouselStyle';

export const Carousel = () => {
  return (
    <CarouselContainer> 
         <ImageSlider slides={SliderData} />
    </CarouselContainer>
   
  )
}

export default Carousel;