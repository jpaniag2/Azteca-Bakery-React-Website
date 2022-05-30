import React, { useState } from 'react'
import { Container, Carousel } from 'react-bootstrap'
import FirstSlide from '../../images/CarouselPictures/firstSlide.png'
import SecondSlide from '../../images/CarouselPictures/secondSlide.png'
import ThirdSlide from '../../images/CarouselPictures/thirdSlide.png'
import FourthSlide from '../../images/CarouselPictures/fourthSlide.png'
import styled from 'styled-components'

const Style = styled.div`
    margin-top: 3%;

    .container{
        height: 100%;

    }

    img{
        max-height: 800px;
        object-fit: cover;
        @media screen and (max-width: 450px){
            object-fit: cover;
            height: 500px;
        }
        }
    .carousel{
 

        @media screen and (max-width: 450px){
        margin-top: 35%;  
        width: 100%;
        height: 500px;
        margin-left: 0%;
        margin-right: 0%;
        }
    }
`


const CarouselHero = () => {

    return (
        <Style>
                <Carousel interval={6000} fade={true}>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={FirstSlide}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={SecondSlide}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={ThirdSlide}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={FourthSlide}
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
        </Style>


    )
}

export default CarouselHero