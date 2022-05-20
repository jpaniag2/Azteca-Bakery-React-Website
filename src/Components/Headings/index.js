import React from 'react';
import HeroBG from '../../images/CakeCoverIcon1.png'
import AboutBG from '../../images/AboutBG.png'

import AOS from 'aos';
import 'aos/dist/aos.css'

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


import { InfoContainer, 
         InfoWrapper, 
         TextWrapper, 
         TopLine, Heading,
         Subtitle

        } from './HeadingsStyle';


const Headings = ({topLine, heading, subTitle, primary}) => {

  AOS.init({ 
    disable: 'mobile', 
    duration: 2000 });

    return (
        <>
            <Container>
                 <InfoWrapper>
                    <TextWrapper>
                        <TopLine >{topLine}</TopLine>
                        <Heading>{heading} </Heading>
                        <Subtitle>{subTitle}</Subtitle>
                    </TextWrapper>
                </InfoWrapper>
            </Container>

        </>
    )

};

export default Headings;