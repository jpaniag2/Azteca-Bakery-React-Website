import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselHero from '../CarouselHero';
import About from '../About';
import { homeObjOne, homeObjTwo } from '../About/Data';
import Headings from '../Headings';
import { headingObj1, headingObj2 } from '../Headings/Data';
import {Container, TabContainer} from 'react-bootstrap'


import Hero2 from '../Hero2';
import Hero from '../Hero';
import { HeroObjOne } from '../Hero2/Data';


export const Contents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (

    <>
          <CarouselHero />
          <Container fluid style={{backgroundColor: '#f5f5f5'}}>
            <Headings {...headingObj1}/>
            
            <About  {...homeObjTwo}/>
            <Headings {...headingObj2}/>
            <About  {...homeObjOne}/>

          </Container>
    </>

  )
}

export default Contents