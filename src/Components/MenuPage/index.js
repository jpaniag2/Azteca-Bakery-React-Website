import React from 'react'
import PanDulceSection from '../MenuPageComponents/PanDulceSection'
import TrendyBakesSection from '../MenuPageComponents/TrendyBakesSection'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Divider = styled.div`
    padding-bottom: 6rem;

    @media screen and (max-width: 480px){
        padding-bottom: 1.5rem;
    }
`

const SectionName = styled.div`
    color: #00211a;
    font-family: 'Old Standard TT', cursive;
    font-weight: 700;
    font-size: 8rem;
    line-height: 60px;
    text-align: center;
    padding-top: 5rem;

    @media screen and (max-width: 480px){
        font-size: 3.5rem;
    }
`

const MenuPage = () => {
  return (
    <>

      <Container fluid style={{backgroundColor: '#abd9b5'}}>
        <Divider></Divider>
        <SectionName>Menu</SectionName>
        <Divider></Divider>
      </Container>

      <Divider></Divider>

      <TrendyBakesSection />
      <PanDulceSection />

    </>

  )
}

export default MenuPage