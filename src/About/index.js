import React from 'react';
import AboutMe from '../../images/AboutMe.JPG'
import AboutMe1 from '../../images/AboutMe1.JPG'
import Hours from '../../images/Hours.png'


import {
  AboutContainer,
  AboutWrapper,
  AboutIcon,
  AboutH1,
  Subtitle,
  DescriptionWrapper
} from './AboutStyle';


const About = () => {
  return (
    <>
    <AboutContainer id="about">
        <AboutWrapper>
        <AboutIcon src={AboutMe} />
        <AboutH1>
        Our Cakes
         <Subtitle>
           SOFT, FRESH, CREAMY, MOUTH WATERING,
         </Subtitle>
         </AboutH1>
        </AboutWrapper>

        <AboutWrapper>
        <AboutH1>Our Pastries
         <Subtitle>
           SWEET, SAVORY, FRESH, DELICIOUS
         </Subtitle>
         </AboutH1>
         <AboutIcon src={AboutMe1} />
        </AboutWrapper>
      </AboutContainer>

    </>
  )

};

export default About;