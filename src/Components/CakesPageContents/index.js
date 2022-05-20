import React, {useState} from 'react'

import Footer from '../Footer';
import About from '../About';
import Location from '../Location'
import { homeObjOne, homeObjTwo } from '../About/Data';

import { CakeContainer, Style } from './CakeContentsStyle';
import Hero from '../Hero';
import Services from '../Services';
import NavBar from '../NavBar'
import CakeMenu from '../CakeMenu';
import BakeryInfo from '../BakeryInfo';
import OrderInstructions from '../OrderInstructions2';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselHero from '../CarouselHero';

export const CakesPageContents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (<>
    <Style>
          <CarouselHero />
          {/* <Container fluid> */}
          <Container style={{overflow: "hidden", padding: "50px 0"}}>
          <BakeryInfo />
          
            {/* <OrderInstructions /> */}
            {/* <NavBar toggle={toggle} /> */}
            {/* <Services /> */}
 
            <CakeMenu />
          </Container>
    </Style>
  </>

  )
}

export default CakesPageContents