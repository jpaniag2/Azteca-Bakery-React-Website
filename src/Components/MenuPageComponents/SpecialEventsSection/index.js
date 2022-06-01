import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import SpecialEventsColumns from '../SpecialEventsColumns'

const Divider = styled.div`
    padding-bottom: 6rem;

    @media screen and (max-width: 480px){
        padding-bottom: 1rem;
    }
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
        padding-top: 1rem;
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

const SpecialEventsSection = () => {

    return (
        <>
            <Container fluid='xxl'>
                <Divider></Divider>
                <SectionName>We put the 'Special' in Special Event!</SectionName>
                <br></br>
                <Description>We offer customized cakes for special events including Weddings, Quinceañeras, Birthdays, Bautizos, or a victory cake for your little league team.
                    <br></br>
                    <br></br>
                    *Visit our Instagram below to see our previous customized cakes.*
                    <br></br>
                    <br></br>
                    <SeeLocations href='https://www.instagram.com/aztecapanycakes/'>Our Instagram</SeeLocations>
                    </Description>
                    <Divider></Divider>
            </Container>

            <SpecialEventsColumns />

            <Divider></Divider>
            <Divider></Divider>
        </>
    )
}

export default SpecialEventsSection