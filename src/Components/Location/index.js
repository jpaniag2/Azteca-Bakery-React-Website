import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import LocationCard from '../LocationCard';
import { HendersonvilleLocation, AshevilleLocation } from '../LocationCard/Data';
import { Introduction,TopLine } from './LocationStyle';
//import Iframe from 'react-iframe'

const locationItems = [HendersonvilleLocation, AshevilleLocation];

const Location = () => {
  return (
    <Container fluid='xxl'>
        <br></br>
        <Introduction>Projects</Introduction>
        <TopLine>by language</TopLine>

      <Row xs={1} md={2} className="g-4">
        {locationItems.map((location) => (
          <Col>
            <LocationCard {...location} />
          </Col>
        ))}
      </Row>
    </Container>

    // <LocationContainer>
    //   <ServicesWrapper>
    //     <ServicesCard>
    //       <ServicesH1>{storeHeadline}</ServicesH1>
    //       <ServicesIcon src={img} ></ServicesIcon>

    //     </ServicesCard>

    //     <ServicesCard>
    //       <ServicesH2>{locationHeadline}</ServicesH2>
    //       <ServicesP>{street} </ServicesP>
    //       <ServicesP>{city} </ServicesP>
    //       <br></br>
    //       <ServicesP>{days}{hours}</ServicesP>
    //       <br></br>
    //       <ServicesP>{phone}</ServicesP>

    //       <BtnWrap href={repositoryUrl} target="_blank">
    //           <Button>Directions</Button>
    //       </BtnWrap>


    //     </ServicesCard>



    //   </ServicesWrapper>
    // </LocationContainer>
  )
}

export default Location


{/* <ServicesCard>
<Iframe id='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13019.762304464668!2d-82.4476293!3d35.3322971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62fec5cdcd403b3!2sAzteca!5e0!3m2!1sen!2sus!4v1645468227967!5m2!1sen!2sus" 
width="100%"
height="400px"
styles={{height: "700px"}}
allowfullscreen="true" 
loading="lazy" />

</ServicesCard> */}