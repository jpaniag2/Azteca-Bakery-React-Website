import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'
import Video from '../../videos/HeroExampleVideo.mp4'


import { InfoContainer, 
         InfoWrapper, 
         TextWrapper, 
         TopLine, VideoBg, 
         HeroBg

        } from './HeroStyle';


const Hero = () => {

  AOS.init({ duration: 2000 });

  return (
    <>
    <InfoContainer>
      <InfoWrapper>
            <TextWrapper>
            <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='HeroExampleVideo/mp4' />
            </HeroBg>

              <TopLine data-aos='fade-down-left'>Welcome To Paradise</TopLine>
            </TextWrapper>
      </InfoWrapper>
    </InfoContainer>

    </>
  )

};

export default Hero;
