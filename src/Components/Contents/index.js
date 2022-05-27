import React, {useState} from 'react'

import About from '../About';

import { homeObjOne, homeObjTwo } from '../About/Data';

import Headings from '../Headings';

import { headingObj1, headingObj2 } from '../Headings/Data';


import {Container, TabContainer} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Hero2 from '../Hero2';
import Hero from '../Hero';
import { HeroObjOne } from '../Hero2/Data';


export const Contents = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (<>

          {/* <Hero2 {...HeroObjOne}/> */}
          <Hero />
          <Container style={{overflow: "hidden", padding: "50px 0"}}>

            <Headings {...headingObj1}/>
            
            <About  {...homeObjTwo}/>
            <Headings {...headingObj2}/>
            <About  {...homeObjOne}/>

        
            </Container>

          </>

  )
}

export default Contents