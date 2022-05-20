import React from 'react'
import { Container, ListGroup, Row, Col } from 'react-bootstrap'
import BakeryCard from '../BakeryCard'
import { BakeryStyle, Introduction } from './BakeryInfoStyle'
import { BreadCard, CakeCard, PanDulceCard, PersonalizeCard } from '../BakeryCard/Data'

import AOS from 'aos';
import 'aos/dist/aos.css'

const BakeryInfo = () => {

  AOS.init({
    duration: 1000
  });

  return (
    <BakeryStyle id="bakery">
    <Introduction></Introduction>
      <Container fluid>

        <Row >

          {/* <Col sm data-aos='fade-down-right'>
              <BakeryCard {...PersonalizeCard}/>
              </Col> */}
          <Col sm >
            <div >
              <BakeryCard {...CakeCard} />
            </div>

          </Col>

          <Col sm >
            <div >
              <BakeryCard {...PanDulceCard} />
            </div>

          </Col>

          {/* <Col sm >
            <div >
              <BakeryCard {...BreadCard} />
            </div>

          </Col> */}
        </Row>


      </Container>
    </BakeryStyle>
  )
}

export default BakeryInfo