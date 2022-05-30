import React, { useEffect } from 'react';
// import { Button } from '../ButtonElements';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'

import { Container, Row, Col, Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './AboutStyle';

const Style = styled.div`

        .container{
            overflow: hidden;
            max-height: 600px;
        }

        .card{
            border: none;
            background-color: ${({ isFirstHeading }) => (isFirstHeading ? '#F59A8E' : '#F5F5F5')};;
            max-height: 600px;
            
        }

        .card-img{
            object-fit: fill;
            @media screen and (max-width: 1024px){
              object-fit: contain;
        }
        }
    
        .card-title{
        color: ${({ isFirstHeading }) => (isFirstHeading ? '#FFFF' : '#00211a')};;
        font-family: 'Bellota', cursive;
        font-weight: 400;
        font-size: 5vw;
        line-height: 160px;
        margin-bottom: 10px;
        text-align: right;
        margin-top: 4vw;
    
        @media screen and (max-width: 1500px){
            margin-top: 4rem;
            font-size: 5rem;
        }
    
        @media screen and (max-width: 480px){
            line-height: 100px;
            font-size: 2rem;
        }
        }
    
        .card-text{
            margin-bottom: 24px;
            font-size: 1.3vw;
            font-family: 'Bellota Text', cursive;
            font-weight: 700;
            line-height: 1.5;
            text-align: right;
            
          color: ${({ isFirstHeading }) => (isFirstHeading ? '#000' : '#00211a')};
    
        @media screen and (max-width: 1500px){
            font-size: 1.3rem;
        }
        @media screen and (max-width: 480px){
            font-size: 2rem;
            line-height: 2;
        }
        @media screen and (max-width: 480px){
            font-size: 1rem;
        }
        }
    `

const About = ({ primary, dark, dark2, lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, buttonLabel, linkRoute }) => {

  const navigate = useNavigate();


  AOS.init({
    // disable: 'mobile',
    duration: 1000
  });

  return (
    <>
      {/* <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
        <Column2>
          
          <ImgWrap >
            <Img src={img} alt={alt} />
          </ImgWrap>
        </Column2>
          <Column1 data-aos='slide-up'>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button onClick={()=> {navigate(linkRoute)}} 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true" 
                offset={-80} 
                primary={primary ? 1 : 0} 
                dark={dark ? 1: 0} 
                dark2={dark2 ? 1 : 0}>{buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer> */}

      <Style>
        <Container fluid>
          <Row>
            <Col >
              <Card.Img style={{ height: '100%' }} src={img} />

            </Col>
            <Col md={{ span: 7, order: 'first' }}>

              <Card style={{ backgroundColor: 'transparent' }}>
                <Card.Body >
                  <Card.Title >{topLine}</Card.Title>
                  <Card.Text style={{ fontWeight: '600' }}>{headline}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Button className='float-end' variant="primary" >Go somewhere</Button>
                </Card.Body>


              </Card>
            </Col>
          </Row>
        </Container>
      </Style>
    </>
  )

};

export default About;
