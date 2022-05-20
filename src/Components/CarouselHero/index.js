import React, {useState} from 'react'
import { Container, Carousel } from 'react-bootstrap'
import CustomCake from '../../images/Personalize.JPG'
import AztecaReady from '../../images/AztecaReady.JPG'
import Bread from '../../images/Bread.JPG'
import PanDulce from '../../images/PanDulce.JPG'
import HeroBG from '../../images/Picture1.JPG'
import styled from 'styled-components'

const Style = styled.div`
    padding-top: 0%;
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
        height: 500px;
        object-fit: cover;
        border-radius: 5px;

        }
    .carousel{
        padding-bottom: 5%;
        width: 100%;
        

        @media screen and (max-width: 450px){
        width: 100%;
        margin-left: 0%;
        margin-right: 0%;
        }
    }
`

const TopLine = styled.p`
    color: #FDB3CA;
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    font-size: 10rem;
    line-height: 160px;
    margin-bottom: 36px;
    padding: 0 0;
    text-align: center;

    @media screen and (max-width: 1200px){
        font-size: 4rem;
    }

    @media screen and (max-width: 480px){
        line-height: 100px;
        font-size: 2rem;
    }
`

const CarouselHero = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Style>
        <Container fluid>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={AztecaReady}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CustomCake}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={PanDulce}
                    alt="Third slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bread}
                    alt="Fourth slide"
                />

            </Carousel.Item>
        </Carousel>
        <TopLine id='gallery'>- Menu -</TopLine>
        </Container>
        </Style>


    )
}

export default CarouselHero