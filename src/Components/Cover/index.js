import React from 'react'

import Icon1 from '../../images/MakingBread.jpg'
import Icon2 from '../../images/CakeDemo1.JPG'
import Icon3 from '../../images/BreadDisplay.jpg'

import {useNavigate} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'


import { ServicesContainer, 
    ServicesH1, ServicesWrapper, 
    ServicesCard, ServicesIcon, 
    ServicesH2, ServicesP } from './CoverStyle';

const Cover = () => {

    const navigate = useNavigate();

    AOS.init({ duration: 2000 });

  return (
    <ServicesContainer id="menu">
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1} onClick={()=> {navigate('/cakespage')}} />
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2} />
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3} />
        </ServicesCard>
    </ServicesWrapper>
    
    </ServicesContainer>
  )
}

export default Cover