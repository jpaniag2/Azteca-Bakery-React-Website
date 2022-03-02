import React, {useState} from 'react'

import Footer from '../Footer';
import About from '../About';
import Location from '../Location'
import { homeObjOne, homeObjTwo } from '../About/Data';

import { Container } from './ContentsStyle';
import Hero from '../Hero';
import Services from '../Services';
import NavBar from '../NavBar'
import Headings from '../Headings';
import Cover from '../Cover';
import { headingObj1, headingObj2 } from '../Headings/Data';

export const Contents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
        <Container>
            
            {/* <NavBar toggle={toggle} /> */}
            {/* <Hero /> */}
            <Cover />
            <Headings {...headingObj1}/>
            {/* <Services /> */}
            <About  {...homeObjOne}/>
            <Headings {...headingObj2}/>
            <About  {...homeObjTwo}/>
            {/* <Services /> */}
            {/* <Location /> */}
        
        </Container>

  )
}

export default Contents