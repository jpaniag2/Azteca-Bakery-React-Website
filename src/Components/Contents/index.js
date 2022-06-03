import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselHero from '../CarouselHero';
import CakeHomeSection from '../CakeHomeSection';
import { cakeHomeInfo } from '../CakeHomeSection/Data';
import { Container } from 'react-bootstrap'
import BG from '../../images/CakeHomeSection/lastSection.png'
import styled from 'styled-components';


import ProductsHomeSection from '../ProductsHomeSection';
import PanDulceHomeSection from '../PanDulceHomeSection';
import { panDulceHomeInfo } from '../PanDulceHomeSection/Data';
import VisitUsHomeSection from '../VisitUsHomeSection';
import LastHomeSection from '../LastHomeSection';
import LocationsHomeSection from '../LocationsHomeSection';

const Style = styled.div`
    background-image: ${`url(${BG})`};
    background-repeat: no-repeat;
    background-size: 100%;

`


export const Contents = () => {


  return (

    <>
      <CarouselHero />

      <Container fluid style={{ backgroundColor: '#fff' }}>
        <ProductsHomeSection />
      </Container>


      <Container fluid style={{ backgroundColor: '#ffc9cb' }}>
        <CakeHomeSection {...cakeHomeInfo} />
      </Container>


      <Container fluid style={{ backgroundColor: '#fff' }}>
        <VisitUsHomeSection />
      </Container>

      <Container fluid style={{ backgroundColor: '#ffe9ad' }}>
        <PanDulceHomeSection {...panDulceHomeInfo} />
      </Container>

      <Container fluid>
        <LocationsHomeSection />
      </Container>

      <Style>
        <Container fluid >
          <LastHomeSection />
        </Container>
      </Style>

    </>

  )
}

export default Contents