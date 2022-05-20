import React, {useState} from 'react'

import Footer from '../Footer';
import About from '../About';
import Location from '../Location'
import { homeObjOne, homeObjTwo } from '../About/Data';

// import { Container } from './ContentsStyle';
import Hero from '../Hero';
import Services from '../Services';
import NavBar from '../NavBar'
import Headings from '../Headings';
import Cover from '../Cover';
import { headingObj1, headingObj2 } from '../Headings/Data';
import { locationObj1 } from '../Location/Data';

import {Container, TabContainer} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BakeryInfo from '../BakeryInfo';
import LocationContents from '../LocationContents';
import Hero2 from '../Hero2';
import { HeroObjOne } from '../Hero2/Data';
import CarouselHero from '../CarouselHero';
import OrderInstructions2 from '../OrderInstructions2'

export const Contents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (<>

          <Hero2 {...HeroObjOne}/>
          <Container style={{overflow: "hidden", padding: "50px 0"}}>
          
            {/* <NavBar toggle={toggle} /> */}
            {/* <Hero /> */}
            {/* <Cover /> */}
            {/* <OrderInstructions2 /> */}
            {/* <BakeryInfo /> */}
            <Headings {...headingObj1}/>
            
            <About  {...homeObjTwo}/>
            <Headings {...headingObj2}/>
            <About  {...homeObjOne}/>
            {/* <CarouselHero /> */}
            

            
            
            {/* <Services /> */}
            
            
            
            
            {/* <LocationContents /> */}
            


            {/* <Services /> */}
            {/* <Location {...locationObj1}/> */}
        
            </Container>

          </>

  )
}

export default Contents