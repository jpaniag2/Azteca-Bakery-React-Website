import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Button } from './CakeHomeStyles'
import 'bootstrap/dist/css/bootstrap.min.css'

const Style = styled.div`

        .container{
            overflow: hidden;
            max-height: 600px;
        }

        .card{
            border: none;
            background-color: #F5F5F5;
            max-height: 600px;
            
        }

        .card-img{
            object-fit: fill;

            @media screen and (max-width: 1400px){
              object-fit: cover;
        }
        }
    
        .card-title{
        color: #591c29;
        font-family: "Old Standard TT", serif;
        font-weight: 700;
        font-size: 5vw;
        line-height: 160px;
        margin-bottom: 10px;
        text-align: center;
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
            font-family: 'Khula', sans-serif;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            
          color: #591c29;
    
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

const CakeHomeSection = ({topLine, headline, description, img, buttonLabel, linkRoute, conditions}) => {
    return (
        <>
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
                                <Card.Text style={{ fontWeight: '400', fontSize: '1rem' }}>{conditions}</Card.Text>
                                <Button href={linkRoute}>{buttonLabel}</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </Style>
        </>

    )
}

export default CakeHomeSection