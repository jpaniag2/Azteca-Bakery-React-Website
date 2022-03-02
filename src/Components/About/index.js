import React, {useEffect} from 'react';
import { Button } from '../ButtonElements';
import {useNavigate} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'


import { InfoContainer, 
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2, 
         TextWrapper, 
         TopLine,
         Heading,
         Subtitle,
         BtnWrap,
         ImgWrap,
         Img
        } from './AboutStyle';


const About = ({primary, dark, dark2,lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, buttonLabel, linkRoute}) => {

  const navigate = useNavigate();


  AOS.init({ 
    disable: 'mobile',
    duration: 2000 });

  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1 data-aos='fade-left'>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button onClick={()=> {navigate(linkRoute)}} 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact="true" 
                offset={-80} 
                primary={primary ? 1 : 0} 
                dark={dark ? 1: 0} 
                dark2={dark2 ? 1 : 0}>{buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2 >
          
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>

    </>
  )

};

export default About;
