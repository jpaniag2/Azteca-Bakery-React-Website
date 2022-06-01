import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import TrendyBakesColumns from '../TrendyBakesColumns'

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
    transition: all 0.6 ease-out;

    &:hover{
        transition: all 0.6 ease-out;
        color: #bae8d4;
    }

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

const TrendyBakesSection = () => {

    return (
        <>
        <Container fluid='xxl'>
        <Divider></Divider>
        <SectionName>A Bit For Every Mood!</SectionName>
            <Description>Whether enjoying a cup of hot chocolate with a Concha on a cloudy day, making fresh tortas, or picking up a limited baked good, there's always something for your mood. 
                        <br></br>
                        <br></br>
                        *Follow us on Instagram for special announcements*
                <br></br>
                <br></br>
                <SeeLocations href='https://www.instagram.com/aztecapanycakes/'>Follow Us</SeeLocations>
                </Description>
                <Divider></Divider>
        </Container>

            <TrendyBakesColumns />

            <Divider></Divider>
            <Divider></Divider>
        </>
    )
}

export default TrendyBakesSection