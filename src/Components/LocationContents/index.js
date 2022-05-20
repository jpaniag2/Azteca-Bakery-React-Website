import React from 'react'
import Location from '../Location'
import styled from 'styled-components'
import HeroBG from '../../images/AboutBG.png'


import { Container, LocationContentWrapper, LocationContentCard, Introduction } from './LocationContentsStyle';
import { locationObj1, locationObj2 } from '../Location/Data';

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
      
      <Container>
      <Styles>
          <LocationContentWrapper>
              <LocationContentCard>
                  <Location {...locationObj1} />
              </LocationContentCard>

              <LocationContentCard>
                  <Location {...locationObj2} />
              </LocationContentCard>

          </LocationContentWrapper>
          </Styles>
      </Container>


  )
}

export default LocationContents