import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'


import { InfoContainer, 
         InfoWrapper, 
         TextWrapper, 
         TopLine, Heading,
         Subtitle

        } from './HeadingsStyle';


const Headings = () => {

  AOS.init({ duration: 2000 });

    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <TextWrapper>
                        <TopLine data-aos='fade-down-left'>Thank You</TopLine>
                        <Heading> Our Story</Heading>
                        <Subtitle>
                            It all began with two great friends and a simple mission: create the world’s
                            best chocolate chip cookie. 25 years later, the rest is history, baked fresh
                            daily. Sharing something truly delicious can change your day. And day by day,
                            it can change the world. World Peace, one cookie at time.
                        </Subtitle>
                    </TextWrapper>
                </InfoWrapper>
            </InfoContainer>

        </>
    )

};

export default Headings;