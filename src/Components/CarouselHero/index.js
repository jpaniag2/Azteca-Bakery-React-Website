import React, { useState } from 'react'
import { Container, Carousel } from 'react-bootstrap'
import FirstSlide from '../../images/CarouselPictures/firstSlide.png'
import SecondSlide from '../../images/CarouselPictures/secondSlide.png'
import ThirdSlide from '../../images/CarouselPictures/thirdSlide.png'
import FourthSlide from '../../images/CarouselPictures/fourthSlide.png'
import styled from 'styled-components'

const Style = styled.div`
    margin-top: 3%;
    margin-bottom: 5%;

    ${'' /* background-image: ${`url(${HeroBG})`};
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%; */}

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
            <Container fluid>
                <Carousel interval={null}>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={FirstSlide}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={SecondSlide}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ThirdSlide}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
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
                </Container>
        </Style>


    )
}

export default CarouselHero