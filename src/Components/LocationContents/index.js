import React, {useState} from 'react'

import Footer from '../Footer';
import About from '../About';
import Location from '../Location'
import { homeObjOne, homeObjTwo } from '../About/Data';

import { Container } from './LocationContentsStyle';
import Hero from '../Hero';
import Services from '../Services';
import NavBar from '../NavBar'

export const LocationContents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
        <Container>
            {/* <NavBar toggle={toggle} /> */}
            <Location />
        
        </Container>

  )
}

export default LocationContents