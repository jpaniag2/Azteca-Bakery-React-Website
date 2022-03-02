import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'


import { InfoContainer, 
         InfoWrapper, 
         TextWrapper, 
         TopLine, Heading,
         Subtitle

        } from './HeadingsStyle';


const Headings = ({topLine, heading, subTitle}) => {

  AOS.init({ 
    disable: 'mobile', 
    duration: 2000 });

    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <TextWrapper>
                        <TopLine data-aos='fade-down'>{topLine}</TopLine>
                        <Heading>{heading} </Heading>
                        <Subtitle>{subTitle}</Subtitle>
                    </TextWrapper>
                </InfoWrapper>
            </InfoContainer>

        </>
    )

};

export default Headings;