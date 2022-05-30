import React from 'react'
import VisitUsColumns from '../VisitUsColumns'
import { Container, Row, Col, Card } from 'react-bootstrap'
import styled from 'styled-components'


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
        font-size: 1rem;
    }

`

const SeeLocations = styled.a`

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

const VisitUsHomeSection = () => {
    return (

        <>
            {/* <Style>
            <Container >
                <Row>
                    <Col>


                        <Card style={{ backgroundColor: 'transparent' }}>
                            <Card.Body>
                                <Card.Title>{topLine}</Card.Title>
                                <Card.Text>{subTitle}</Card.Text>
                                
                            </Card.Body>
                            <SeeLocations href='/locations'>View Menu</SeeLocations>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Style> */}
        <Container fluid='xxl'>
        <SectionName>Order & Pick Up Options</SectionName>
            <Description>Come visit us at your nearest Azteca Bakery. We are excited 
        for you to order or pick-up one of our famous Tres-Leches Cakes. If you're 
       also in the mood come and pick up some of our daily fresh Pan Dulce for 
        your morning coffee or share with your friends.
                <br></br>
                <br></br>
                <SeeLocations href='/locations'>See Locations</SeeLocations></Description>
        </Container>

            <VisitUsColumns />

            <Divider></Divider>
        </>

    )
}

export default VisitUsHomeSection