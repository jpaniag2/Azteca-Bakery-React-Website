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

export const Contents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
        <Container>
            
            {/* <NavBar toggle={toggle} /> */}
            <Hero />
            <About  {...homeObjOne}/>
            <Headings />
            <About  {...homeObjTwo}/>
            {/* <Services /> */}
            <Location />
        
        </Container>

  )
}

export default Contents