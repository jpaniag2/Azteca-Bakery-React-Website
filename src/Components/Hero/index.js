import React, {useState} from 'react';
import Video from '../../videos/BakeryVideo.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroStyle';
import {Button} from '../ButtonElements';

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }

  return (
      <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='Bakery/mp4' />
      </HeroBg>
        {/* <HeroContent>
          <HeroH1>Welcome</HeroH1>
          <HeroP>
              We are excited to be officially launching our website and accepting online orders. <br></br>.......................
          </HeroP>
      </HeroContent> */}
  </HeroContainer>  
    )
};

export default Hero;
