import React, {useState} from 'react'
import {SliderData} from './ImageSliderData'
import './CarouselStyle.css'
import {AiFillLeftSquare, AiFillRightSquare} from 'react-icons/ai'


const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1: current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

    return(
        <section className="slider">
            <AiFillLeftSquare className='left-arrow' onClick={prevSlide} />
            {SliderData.map((slide, index) => {
                return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt='bakery images' className='sliderImg' />)}
                
                </div>
                )

            })}
            <AiFillRightSquare className='right-arrow' onClick={nextSlide} />
        </section>
    )

}

export default ImageSlider