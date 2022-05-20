import React from 'react';
// import ToDo from '../../images/ToDo.svg'
// import ToDo1 from '../../images/ToDo1.svg'
// import CompleteSteps from '../../images/CompleteSteps.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'

import FirstStep from '../../images/1.png'
import SecondStep from '../../images/2.png'
import ThirdStep from '../../images/3.png'

import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Container, Row, Col, Card } from 'react-bootstrap';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TextWrapper,
    TopLine,
    TechnologyItem,
    Subtitle,
    Introduction,
    HeadingWrapper,
    Img,
    Style
} from './OrderInstructionStyle';

const Image = styled(motion.img)`

        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 500px;
        border-radius: 40px;
        border: 1px solid #000;
        box-shadow: 3px 3px 3px #000;

`
const Image2 = styled.img`

        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 500px;
        border-radius: 40px;
        border: 1px solid #000;
        box-shadow: 3px 3px 3px #000;

`

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 10% 15px;
   

    ${Image}:nth-child(3){
        margin-top: 6%;
        margin-left: 25px;
    }
    ${Image}:nth-child(2){
        margin-top: 3%;
        margin-left: 25px;
    }
    ${Image}:nth-child(1){
        margin-top: 0%;
        margin-left: 25px;
    }


    @media screen and (max-width: 1024px){
        display: none;
 }
`
const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 0px;
    
    .card{
        border-radius: 30px;
        border: 1px solid #000;
        box-shadow: 3px 3px 3px #000;
        margin: 20px 0;
    }

    .card-title{
        color: #000;
    }

    @media screen and (min-width: 1024px){
        display: none;
 }
`

const OrderInstructions2 = ({ lightBg, imgStart, darkText }) => {
    AOS.init({
        disable: 'mobile',
        duration: 1000
    });

    return (

        <Style>
            <Container>
                <InfoContainer>
                <Introduction >- Custom Cakes -</Introduction>
                    <InfoWrapper>
                        
                        <TopLine>How do I order a personalize a cake?</TopLine>

                        <Row>
                            <Col>
                                <TopLine>Choose Options</TopLine>
                            </Col>
                            <Col>
                            <TopLine>Check Details</TopLine>
                            </Col>
                            <Col>
                            <TopLine>Last but not least</TopLine>
                            </Col>
                        </Row>

                        <Column1>
                            <Image
                                src={ThirdStep}
                                alt='third'
                                whileTap={{ scale: 0.9 }}
                                drag={true}
                                dragConstraints={{ left: 0, right: 800, bottom: 0, top: 0 }}
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
                            />
                            <Image
                                src={SecondStep}
                                alt='second'
                                whileTap={{ scale: 0.9 }}
                                drag={true}
                                dragConstraints={{ left: 0, right: 400, bottom: 0, top: 0 }}
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
                            />
                            <Image
                                src={FirstStep}
                                alt='first'
                                whileTap={{ scale: 0.9 }}
                                drag={true}
                                dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            />
                        </Column1>
                        <Column2>


                            <Row>
                                <Col sm>
                                <div data-aos='slide-up'>
                                    <Card>
                                        {/* <Card.Body>
                                            <Card.Title>Choose..</Card.Title>
                                        </Card.Body> */}
                                        

                                        <Card.Img variant='bottom' style={{ objectFit: "contain", height: "400px", borderRadius: "30px" }} src={FirstStep} />
                                    </Card>
                                    </div>
                                </Col>
                                <Col sm>
                                <div data-aos='slide-up'>
                                    <Card>
                                        {/* <Card.Body>
                                            <Card.Title>Details..</Card.Title>
                                        </Card.Body> */}

                                        <Card.Img variant='bottom' style={{ objectFit: "contain", height: "400px" }} src={SecondStep} />
                                    </Card>
                                    </div>
                                </Col>

                                
                                <Col sm >
                                <div data-aos='slide-up'>
                                    <Card>
                                        {/* <Card.Body>
                                            <Card.Title>Just..</Card.Title>
                                        </Card.Body> */}
                                        <Card.Img variant='bottom' style={{ objectFit: "contain", height: "400px" }} src={ThirdStep} />
                                    </Card>
                                    </div>
                                </Col>
                                
                            </Row>

                        </Column2>
                        
                    </InfoWrapper>
                    <TopLine>*For full cake customization policies & details see more below.*</TopLine>
                </InfoContainer>

            </Container>
        </Style>


    )

};

export default OrderInstructions2;