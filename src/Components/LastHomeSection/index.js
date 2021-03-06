import React from 'react'
import { HendersonvilleLocation, AshevilleLocation } from '../LastHomeSectionColumns/Data';
import { Container } from 'react-bootstrap'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
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
        padding-top: 0rem;
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

    font-size: 4rem;
    font-family: 'Khula', cursive;
    font-weight: 600;
    line-height: 2;
    position: center;
    margin: auto 2rem;
    color: #00211a;

    &:Hover{
            transition: 0.5s all ease;
            opacity: 0.8;
            color: #bae8d4 !important;
    }

    ${'' /* @media screen and (max-width: 2350px){
        font-size: 1.3vw;
    } */}
    @media screen and (max-width: 480px){
        font-size: 2rem;
        line-height: 2;
    }
    @media screen and (max-width: 480px){
        font-size: 3rem;
        display: flex inline;
        margin: auto 1rem;
    }

`

const LastHomeSection = () => {
    return (

        <>
            <Container>
            
                
                <SectionName>Socials </SectionName>
                <Description>Follow us on our socials to see our latest works & announcements.  
                    <br></br>
                    <br></br>
                    <SeeLocations href='https://www.instagram.com/aztecapanycakes/'><FaInstagram  /></SeeLocations>
                    <SeeLocations href='https://www.facebook.com/AztecaMexicanProductsBakery'><FaFacebook /></SeeLocations></Description>

            </Container>
                      

            

        </>

    )
}

export default LastHomeSection