import React from 'react'
import Iframe from 'react-iframe'
import { LocationContainer, ServicesCard, ServicesWrapper, ServicesH1, ServicesH2, ServicesP } from './LocationStyle'

const Locations = () => {
  return (
    <LocationContainer>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH1> AZTECA BAKERY</ServicesH1>
          <ServicesH2>Hendersonville</ServicesH2>
          <ServicesP> 148 Henderson Crossing Plaza #148, Hendersonville, NC 28792</ServicesP>
          <br></br>
          <ServicesH2>Asheville</ServicesH2>
          <ServicesP> 996 Patton Ave # B, <br></br> Asheville, NC 28806</ServicesP>
          <ServicesH2>Hours:</ServicesH2>
          <ServicesP>MONDAY - SUNDAY:	9AM–9PM</ServicesP>
          <br></br>
          <ServicesP>(828) 698-8676</ServicesP>


        </ServicesCard>

        <ServicesCard>
          {/* <Iframe id='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13019.762304464668!2d-82.4476293!3d35.3322971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62fec5cdcd403b3!2sAzteca!5e0!3m2!1sen!2sus!4v1645468227967!5m2!1sen!2sus" width="500" height="300" style="border:0;" allowfullscreen="true" loading="lazy"></Iframe> */}

        </ServicesCard>

      </ServicesWrapper>
    </LocationContainer>
  )
}

export default Locations