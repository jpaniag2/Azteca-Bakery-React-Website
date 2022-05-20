import React from 'react';
// import ToDo from '../../images/ToDo.svg'
// import ToDo1 from '../../images/ToDo1.svg'
// import CompleteSteps from '../../images/CompleteSteps.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'

import { Container } from 'react-bootstrap';

import {
      InfoContainer,
      InfoWrapper,
      InfoRow,
      Column1,
      Column2,
      TextWrapper,
      TopLine,
      TechnologyItem,
      Subtitle,
      Introduction,
      HeadingWrapper,
      Img,
      Style
} from './OrderInstructionStyle';


const OrderInstructions = ({ lightBg, imgStart, darkText }) => {
      AOS.init({
            disable: 'mobile',
            duration: 3000
      });

      return (

            <Style>
                  <Container>
                        {/* <Introduction >Personalize</Introduction> */}
                        <TopLine>HOW DO I ORDER a personalized cake?</TopLine>

                        <Column1>
                              <TechnologyItem></TechnologyItem>
                              <TechnologyItem >
                                    <Subtitle darkText={darkText}>no.1 - CHOOSE SIZE. </Subtitle>
                                    <img src='📏' alt='ruler emoji'/>
                              </TechnologyItem>
                              <TechnologyItem >
                                    <Subtitle darkText={darkText}>no.2 - CHOOSE FILLING. 🍑 </Subtitle>
                              </TechnologyItem>
                              <TechnologyItem >
                                    <Subtitle darkText={darkText}>no.3 - CHOOSE CAKE DESIGN. 🎂</Subtitle>
                              </TechnologyItem>
                              <TechnologyItem >
                                    <Subtitle darkText={darkText}>no.4 - CHOOSE PICK-UP DATE. 📅</Subtitle>
                              </TechnologyItem>

                              <TechnologyItem >
                                    <Subtitle darkText={darkText}>no.5 - CONFIRM IN-STORE. 🏪</Subtitle>
                              </TechnologyItem>
                              <TechnologyItem >
                                    <Subtitle darkText={darkText}>no.6 - PAY DEPOSIT. 💰</Subtitle>
                              </TechnologyItem>
                              <TechnologyItem >
                                    <Subtitle darkText={darkText}>no.7 - REVIEW ORDER & AGREEMENT. 📄</Subtitle>
                              </TechnologyItem>
                              <TechnologyItem >
                                    <Subtitle darkText={darkText}>no.8 - GET EXCITED!! 😁</Subtitle>
                              </TechnologyItem>
                              {/* <Img src={CompleteSteps}></Img> */}

                        </Column1>
                        <TopLine>*For full cake customization policies & details see more below.*</TopLine>

                  </Container>
            </Style>


      )

};

export default OrderInstructions;