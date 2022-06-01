import React from 'react'
import PanDulceSection from '../MenuPageComponents/PanDulceSection'
import TrendyBakesSection from '../MenuPageComponents/TrendyBakesSection'
import LastHomeSection from '../LastHomeSection'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import SectionDivider from '../MenuPageComponents/SectionDivider'
import { BreadSectionStart} from '../MenuPageComponents/SectionDivider/Data'

import BG from '../../images/CakeHomeSection/lastSection.png'

const Divider = styled.div`
    padding-bottom: 4rem;

    @media screen and (max-width: 480px){
        padding-bottom: 1.5rem;
    }
`
const LastStyle = styled.div`
    background-image: ${`url(${BG})`};
    background-repeat: no-repeat;
    background-size: 100%;

`

const SectionName = styled.div`
    color: #00211a;
    font-family: 'Old Standard TT', cursive;
    font-weight: 700;
    font-size: 6rem;
    line-height: 60px;
    text-align: center;
    padding-top: 5rem;

    @media screen and (max-width: 480px){
        font-size: 3.5rem;
    }
`

const BreadPage = () => {
  return (
    <>

      <Divider></Divider>

      <Container fluid style={{backgroundColor: '#a4cce1'}}>
        <SectionDivider {...BreadSectionStart} />
      </Container>

      <Container fluid style={{backgroundColor: '#fff'}}>
      <TrendyBakesSection />
      </Container>

      <Container fluid style={{backgroundColor: '#fff'}}>
      <PanDulceSection />
      </Container>

      <LastStyle>
            <Container fluid>
            <LastHomeSection />
            </Container>

      </LastStyle>

    </>

  )
}

export default BreadPage