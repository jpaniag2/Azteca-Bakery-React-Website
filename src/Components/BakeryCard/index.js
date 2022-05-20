import React from 'react'
import { Card, ListGroup, Accordion, Button } from 'react-bootstrap'
import { BakeryCardStyle, ServicesIcon } from './BakeryCardStyle'
import { useNavigate } from 'react-router-dom'

const BakeryCard = ({ img, 
                      title, 
                      body,
                      body2,
                      body3,
                      body4,
                      accordionHeader1,
                      accordionHeader2,
                      accordionHeader3,
                      accordionHeader4 
                    }) => {

  const navigate = useNavigate();

  return (
    <BakeryCardStyle>
      <Card>
        <Card.Img src={img} />
        <Card.ImgOverlay >
          <Card.Title>{title}</Card.Title>
          <Card.Body>{title}</Card.Body>
          {/* <Button style={{ borderRadius: "0px" }}>{title}</Button> */}
        </Card.ImgOverlay>


        {/* <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{accordionHeader1}</Accordion.Header>
            <Accordion.Body>
            {body}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{accordionHeader2}</Accordion.Header>
            <Accordion.Body>
            {body2}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{accordionHeader3}</Accordion.Header>
            <Accordion.Body>
            {body3}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>{accordionHeader4}</Accordion.Header>
            <Accordion.Body>
            {body4}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </BakeryCardStyle>


  )
}

export default BakeryCard