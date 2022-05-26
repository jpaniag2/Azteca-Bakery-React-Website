import React from 'react'
import Location from '../Location'
import styled from 'styled-components'
import HeroBG from '../../images/AboutBG.png'
import { Container } from 'react-bootstrap'

const Styles = styled.div`
    padding-top: 5%;
    background-image: ${`url(${HeroBG})`};
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%;
`

export const LocationContents = () => {


  return (
      
      <Container fluid style={{paddingTop: '60px', paddingBottom: '60px'}}>
        <Location />
      </Container>


  )
}

export default LocationContents