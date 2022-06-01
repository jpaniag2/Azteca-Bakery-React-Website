import React from 'react'
import CakeInformationCard from '../CakeInformationCard'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Style } from './CakeSectionStyle'
import styled from 'styled-components'
import recCakeSizesPic from '../../../images/CakeSizes/recCakeSizes.png'
import cakeFlavorsPic from '../../../images/CakeSizes/cakeFlavors.png'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {
    EightInch, TenInch, TwelveInch, FourteenInch, SixteenInch, EighteenInch,
    RecSmall, RecMedium, RecLarge,
    Vanilla, Chocolate, Mocha,
    Strawberry, Pineapple, Peach, Pecan, Coconut, Flan
} from '../CakeInformationCard/Data'
import SpecialEventsSection from '../SpecialEventsSection'

const roundSizes = [EightInch, TenInch, TwelveInch, FourteenInch, SixteenInch, EighteenInch]
const rectangleSizes = [RecSmall, RecMedium, RecLarge]
const cakeFlavors = [Vanilla, Chocolate, Mocha]
const cakeFillings = [Strawberry, Pineapple, Peach, Pecan, Coconut, Flan]

const Divider = styled.div`
    padding-bottom: 6rem;
`

const SectionName = styled.div`
    color: #00211a;
    font-family: 'Old Standard TT', cursive;
    font-weight: 700;
    font-size: 4rem;
    line-height: 60px;
    text-align: center;
    padding-top: 5rem;

    @media screen and (max-width: 480px){
        font-size: 2rem;
        line-height: 40px;
    }
`

const Description = styled.div`

    padding: 1rem;
    font-size: 1.3rem;
    font-family: 'Khula', cursive;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    width: 80%;
    margin-left: 10%;
    color: #00211a;

    ${'' /* @media screen and (max-width: 2350px){
        font-size: 1.3vw;
    } */}
    @media screen and (max-width: 480px){
        font-size: 2rem;
        line-height: 2;
        width: 100%;
        margin-left: 0%;
    }
    @media screen and (max-width: 480px){
        font-size: .9rem;
        line-height: 1.5;
    }

`

const ViewMore = styled.a`

    font-size: 1.5rem;
    font-family: 'Khula', cursive;
    font-weight: 600;
    line-height: 2;
    position: center;
    margin: auto;
    color: #00211a;

    ${'' /* @media screen and (max-width: 2350px){
        font-size: 1.3vw;
    } */}
    @media screen and (max-width: 480px){
        font-size: 2rem;
        line-height: 2;
    }
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }

`

const CakeSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        adaptiveHeight: true,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (

        <>
            <Container fluid style={{backgroundColor: '#fff'}}>
            <SpecialEventsSection />
            </Container>
            
            {/* Cake Fillings */}
            <Container fluid style={{ backgroundColor: '#fff' }}>
                <Container fluid='xxl'>
                    <SectionName >Cake Fillings</SectionName>
                    <Description > Flan fillings must be ordered 2 days in advance. Relleno de Flan tiene que ordenarse con 2 dias de anticipacion.
                        <br></br>
                        <br></br>
                        {/* <ViewMore href='/menu'>Full List</ViewMore> */}
                    </Description>
                    <Style>
                        <Slider {...settings}>
                            {cakeFillings.map((products) => (
                                <CakeInformationCard {...products} />
                            ))}


                        </Slider>
                    </Style>
                    <Divider></Divider>
                    <Divider></Divider>


                </Container>
            </Container>


            <Row>
                <Col md style={{ backgroundColor: '#bae8d4' }}>
                    <Card.Img style={{ objectFit: 'cover', height: '100%' }} src={cakeFlavorsPic} />
                </Col>

                <Col style={{ backgroundColor: '#fff' }}>
                    <SectionName>Cake Flavors</SectionName>
                    <Description> Other custom flavors may be arranged, but not guranteed.</Description>
                    <SectionName>
                        Vanilla
                        <Divider></Divider>
                        Chocolate
                        <Divider></Divider>
                        Mocha
                        <Description>*extra charge*</Description>
                        <Divider></Divider>
                    </SectionName>

                </Col>
            </Row>

            {/* Round Sizes */}
            <Container fluid style={{ backgroundColor: '#fff' }}>
                <Container fluid='xxl'>
                <Divider></Divider>
                    <SectionName>Round Cake Sizes</SectionName>
                    <Description> Custom size must be done in-store.
                        <br></br>
                        <br></br>
                        {/* <ViewMore href='/menu'>Full List</ViewMore> */}
                    </Description>
                    <Style>
                        <Slider {...settings}>
                            {roundSizes.map((products) => (
                                <CakeInformationCard {...products} />
                            ))}


                        </Slider>
                    </Style>
                    <Divider></Divider>
                    <Divider></Divider>
                </Container>
            </Container>


            <Row>

                <Col style={{ backgroundColor: '#FFE9AD' }}>
                    <Card.Img style={{ objectFit: 'cover', height: '100%' }} src={recCakeSizesPic} />
                </Col>

                <Col md={{ span: 6, order: 'first' }} style={{ backgroundColor: '#fff' }}>
                    {/* Rectangle Sizes */}

                    {/* <Container fluid style={{ backgroundColor: '#FFE9AD'  }}>
<Container fluid='xxl' >
    <SectionName>Rectangle Cake Sizes</SectionName>
    <Description> Custom size must be done in-store.
        <br></br>
        <br></br>
        <ViewMore href='/menu'>Full List</ViewMore>
    </Description>
    <Style>
        <Slider {...settings}>
            {rectangleSizes.map((products) => (
                <CakeInformationCard {...products} />
            ))}


        </Slider>
    </Style>
</Container>
</Container> */}
                    <SectionName>Rectangle Cake Sizes</SectionName>
                    <Description> Other custom sizes may be arranged, but not guranteed.</Description>
                    <SectionName>
                        Small
                        <Divider></Divider>
                        Medium
                        <Divider></Divider>
                        Large
                        <Divider></Divider>
                    </SectionName>

                </Col>

            </Row>


            {/* Cake Flavors */}

            {/* <Container fluid style={{ backgroundColor: '#fff' }}>
                <Container fluid='xxl'>
                    <SectionName>Cake Flavors</SectionName>
                    <Description> An extra charge will be added to * items.
                        <br></br>
                        <br></br>
                        <ViewMore href='/menu'>Full List</ViewMore>
                    </Description>
                    <Style>
                        <Slider {...settings}>
                            {cakeFlavors.map((products) => (
                                <CakeInformationCard {...products} />
                            ))}


                        </Slider>
                    </Style>
                </Container>
            </Container> */}


        </>

    )
}

export default CakeSection