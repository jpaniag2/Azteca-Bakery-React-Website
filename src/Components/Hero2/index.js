import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

import PanDulceIcon from '../../images/PanDulceCoverIcon1.png'
import CakeIcon from '../../images/CakeCoverIcon2.png'
import Hoya from '../../images/HoyaCoverIcon1.png'
import Cuernito from '../../images/CuernitoCoverIcon1.png'
import Concha from '../../images/ConchaCoverIcon.png'

import TresLeches from '../../images/TresLechesCake.png'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Image,
  Image2,
  ImgWrap,
  Img,
  Introduction
} from './HeroStyle';




const Hero2 = ({ lightBg, id, imgStart, introduction, topLine, lightText, headline, darkText, description, img, alt }) => {

  AOS.init({
    // disable: 'mobile',
    duration: 4000
  });

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow >
            <Column1>

              {/* <Image
                src={Concha}
                alt='first'
                whileTap={{ scale: 0.9 }}
                drag={true}
                dragConstraints={{ left: 700, right: 700, bottom: 50, top: -50 }}
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 700, transition: { duration: 2 } }}
              /> */}


              <Image
                src={CakeIcon}
                alt='first'
                whileTap={{ scale: 0.9 }}
                // drag={true}
                // dragConstraints={{ left: 0, right: 800, bottom: 300, top: 300 }}
                initial={{ opacity: 0, x: 300, y: 550}}
                animate={{ opacity: 1, x: 300, y: 350, transition: { duration: 1, delay: 1 } }}
                // style={{position: 'fixed', zIndex: '-1'}}
              />

              <Image
                src={Cuernito}
                alt='first'
                whileTap={{ scale: 0.9 }}
                // drag={true}
                // dragConstraints={{ left: 700, right: 700, bottom: 50, top: -50 }}
                initial={{ opacity: 0, x: -50, y: 550 }}
                animate={{ opacity: 1, x: -50, y: 350, transition: { duration: 2, delay: 2 } }}
                // style={{position: 'fixed', zIndex: '-1'}}
              />

              <Image
                src={Hoya}
                alt='first'
                whileTap={{ scale: 0.9 }}
                // drag={true}
                // dragConstraints={{ left: -200, right: -200, bottom: 60, top: -60 }}
                initial={{ opacity: 0, x: 650, y: 550 }}
                animate={{ opacity: 1, x: 650, y: 350, transition: { duration: 3, delay: 3 } }}
                // style={{position: 'fixed', zIndex: '-1'}}
                
              />



              <TextWrapper data-aos='zoom-out'>
                <Introduction data-aos='slide-down'>{introduction}</Introduction>
                <TopLine data-aos='slide-up'>{topLine}</TopLine>
                <Heading lightText={lightText} data-aos='slide-down'>{headline}</Heading>
                <br></br>
                <br></br>
                <Subtitle darkText={darkText} data-aos='slide-up'>{description}</Subtitle>
              </TextWrapper>

              {/* <Image2
                src={CakeIcon}
                alt='first'
                  
                /> */}

            </Column1>
            {/* <Column2>
          <Img src={img} alt={alt} />
          </Column2> */}
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

    </>
  )

};

export default Hero2;