import React, {useState} from 'react'

import Footer from '../Footer';
import About from '../About';
import Location from '../Location'
import { homeObjOne, homeObjTwo } from '../About/Data';

import { Container } from './ContentsStyle';
import Hero from '../Hero';
import Services from '../Services';
import NavBar from '../NavBar'

export const Contents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
        <Container>
            <Hero />
            {/* <NavBar toggle={toggle} /> */}
            <About  {...homeObjOne}/>
            <About  {...homeObjTwo}/>
            <Location />
        
        </Container>

  )
}

export default Contents