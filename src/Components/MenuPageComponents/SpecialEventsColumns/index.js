import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import styled from 'styled-components'
import img from '../../../images/SpecialEvents/weddingCake.jpg'
import img2 from '../../../images/SpecialEvents/birthdayCake.jpg'
import img3 from '../../../images/SpecialEvents/specialEvent.jpg'

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
            object-fit: cover;

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
            line-height: 2;
            text-align: center;
            
          color: #00211a;
    
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

const SpecialEventsColumns = () => {
    return (
        <Container fluid>
        <Style>
            <Container fluid>
                <Row>
                    <Col sm>
                        <Card.Img style={{ height: '100%' }} src={img} />
                        <Card.Text>Weddings</Card.Text>

                    </Col>

                    <Col sm>

                        <Card.Img style={{ height: '100%' }} src={img2} />
                        <Card.Text>Birthdays</Card.Text>
                    </Col>

                    <Col sm>

                        <Card.Img style={{ height: '100%' }} src={img3} />
                        <Card.Text>Special Events</Card.Text>
                    </Col>

                </Row>
            </Container>
        </Style>
        </Container>

    )
}

export default SpecialEventsColumns