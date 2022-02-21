import React from 'react';
import Icon1 from '../../images/TresLechesCake.png'
import Icon2 from '../../images/Concha.png'


import { ServicesContainer, 
        ServicesH1, ServicesWrapper, 
        ServicesCard, ServicesIcon, 
        ServicesH2, ServicesP } from './ServicesStyle';

const Services = () => {
  return (
      <ServicesContainer id="menu">
          <ServicesH1>Discover</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1} />
                  <ServicesH2> Tres Leches Cakes</ServicesH2>
                  <ServicesP>Pre-Made & Customization Available</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2} />
                  <ServicesH2>Mexican bread & pastries</ServicesH2>
                  <ServicesP> Freshly made everyday</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
      </ServicesContainer>
  );
};

export default Services;
