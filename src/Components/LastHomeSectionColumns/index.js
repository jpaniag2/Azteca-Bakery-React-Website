import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'


const Style = styled.div`

        .container{
            overflow: hidden;
            max-height: 600px;
        }

        .card{
            border: none;
            background-color: #EED8F3;
            max-height: 600px;
            
        }

        .card-img{
            object-fit: fill;

            @media screen and (max-width: 1400px){
              object-fit: cover;
        }
        }
    
        .card-title{
        color: #5C636A;
        font-family: "Old Standard TT", serif;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 160px;
        margin-bottom: 10px;
        text-align: center;
        margin-top: 0vw;
    
        @media screen and (max-width: 1500px){
            margin-top: 0rem;
            font-size: 3rem;
        }
    
        @media screen and (max-width: 480px){
            line-height: 100px;
            font-size: 2rem;
        }
        }
    
        .card-text{
            margin-bottom: 24px;
            font-size: 1.3rem;
            font-family: 'Khula', sans-serif;
            font-weight: 500;
            line-height: 1.5;
            text-align: center;
            
          color: #5C636A;
    
        @media screen and (max-width: 1500px){
            font-size: 1.3rem;
        }
        @media screen and (max-width: 480px){
            font-size: 2rem;
            line-height: 1;
        }
        @media screen and (max-width: 480px){
            font-size: .9rem;
        }
        }

    `

const LastHomeSectionColumns = ({ storeHeadline, locationHeadline, street, city, days, hours, phone, directionsButtonUrl, directionsButtonLabel }) => {

    const locationInfo = [locationHeadline, street, city, days, hours, phone]

    return (

        <Style>
            <Card>
                <Card.Body>
                    <Card.Title>{storeHeadline}</Card.Title>
                    {locationInfo.map((information) => (
                        <Card.Text>{information}</Card.Text>
                    ))}
                    <Card.Text></Card.Text>
                </Card.Body>
                <Button variant="secondary" size="lg" href={directionsButtonUrl}>
                    {directionsButtonLabel}
                </Button>
            </Card>
        </Style>


    )
}

export default LastHomeSectionColumns