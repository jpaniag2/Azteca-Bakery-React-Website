import React from 'react';
import styled from 'styled-components';

import AOS from 'aos';
import 'aos/dist/aos.css'

import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


import {
    InfoContainer,
    InfoWrapper,
    TextWrapper,
    TopLine, Heading,
    Subtitle

} from './HeadingsStyle';


const Style = styled.div`

    .container{
        overflow: hidden;
        max-height: 600px;
    }
    .card{
        border: none;
        background-color: ${({ isFirstHeading }) => (isFirstHeading ? '#F59A8E' : '#F5F5F5')};;
        max-height: 1000px;
    }
    .card-img{
        object-fit: cover;
    }

    .card-title{
    color: ${({ isFirstHeading }) => (isFirstHeading ? '#FFFF' : '#00211a')};;
    font-family: 'Bellota', cursive;
    font-weight: 400;
    font-size: 5rem;
    line-height: 160px;
    margin-bottom: 10px;
    text-align: center;

    ${'' /* @media screen and (max-width: 2350px){
        font-size: 3vw;
    } */}

    @media screen and (max-width: 480px){
        line-height: 100px;
        font-size: 2rem;
    }
    }

    .card-text{
        margin-bottom: 24px;
    font-size: 1.2rem;
    font-family: 'Bellota Text', cursive;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    color: ${({ isFirstHeading }) => (isFirstHeading ? '#000' : '#00211a')};

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
    }
`

const Headings = ({ topLine, heading, subTitle, isFirstHeading, img }) => {

    AOS.init({
        disable: 'mobile',
        duration: 2000
    });

    return (
        <Style>
            <Container >
                <Row>
                    {/* <Col >
                        <Card.Img style={{ height: '100%' }} src={img} />

                    </Col>
                    <Col md={{span: 7, order: 'first'}}>

                        <Card style={{ backgroundColor: '#fff' }}>
                            <Card.Body>
                                <Card.Title isFirstHeading={isFirstHeading}>{topLine}</Card.Title>
                                <Card.Text style={{ fontWeight: '600' }}>{heading}</Card.Text>
                                <Card.Text>{subTitle}</Card.Text>
                            </Card.Body>


                        </Card>
                    </Col> */}
                    <Col>

                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Body>
                                <Card.Title isFirstHeading={isFirstHeading}>{topLine}</Card.Title>
                                <Card.Text style={{ fontWeight: '600' }}>{heading}</Card.Text>
                                <Card.Text>{subTitle}</Card.Text>
                            </Card.Body>


                        </Card>
                    </Col>
                </Row>
            </Container>


        </Style>
    )

};

export default Headings;