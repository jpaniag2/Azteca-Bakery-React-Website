import React from 'react'
import LastHomeSectionColumns from '../LastHomeSectionColumns'
import { HendersonvilleLocation, AshevilleLocation } from '../LastHomeSectionColumns/Data';
import { Container, Row, Col} from 'react-bootstrap'
import styled from 'styled-components'


const Divider = styled.div`
    padding-bottom: 6rem;
`

const SectionName = styled.div`
    color: #5C636A;
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
    color: #5C636A;


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
    margin: auto 5rem;
    color: #00211a;

    &:Hover{
            transition: 0.5s all ease;
            opacity: 0.8;
            color: #bae8d4 !important;
    }

    @media screen and (max-width: 480px){
        font-size: 2rem;
        line-height: 2;
    }
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }

`

const locationItems = [HendersonvilleLocation, AshevilleLocation];

const LocationsHomeSection = () => {
    return (

        <>
            <Container fluid='xxl'>
                <SectionName>Locations </SectionName>
                <Description>All sweet roads lead to Azteca Bakery.  
                    <br></br>
                    <br></br>
                    <Row xs={1} md={2} className="g-4">
                    {locationItems.map((location) => (
                        <Col>
                            <LastHomeSectionColumns {...location} />
                        </Col>
                    ))}
                </Row>
                </Description>

            </Container>
           

            <Divider></Divider>
        </>

    )
}

export default LocationsHomeSection