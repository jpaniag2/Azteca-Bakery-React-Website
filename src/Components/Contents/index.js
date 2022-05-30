import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselHero from '../CarouselHero';
import CakeHomeSection from '../CakeHomeSection';
import { cakeHomeInfo } from '../CakeHomeSection/Data';
import About from '../About';
import { homeObjOne, homeObjTwo } from '../About/Data';
import Headings from '../Headings';
import { OurStorySection, OurMissionSection } from '../Headings/Data';
import { Container, TabContainer } from 'react-bootstrap'



import ProductsHomeSection from '../ProductsHomeSection';
import PanDulceHomeSection from '../PanDulceHomeSection';
import { panDulceHomeInfo } from '../PanDulceHomeSection/Data';



export const Contents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (

    <>
      <CarouselHero />

      <Container fluid style={{ backgroundColor: '#fff' }}>
        <ProductsHomeSection />
      </Container>

      <Container fluid style={{ backgroundColor: '#ffe9ad' }}>
        <PanDulceHomeSection {...panDulceHomeInfo} />
      </Container>


      <Container fluid style={{ backgroundColor: '#ffc9cb' }}>
        <CakeHomeSection {...cakeHomeInfo} />
      </Container>



      <Container fluid style={{ backgroundColor: '#fff' }}>
        <Headings {...OurStorySection} />
      </Container>

      {/* <Container fluid style={{ backgroundColor: '#fff' }}>
      <Headings {...OurMissionSection} />
      </Container> */}



      {/* <About  {...homeObjOne} /> */}


    </>

  )
}

export default Contents