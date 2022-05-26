import React from 'react'
import { Card, Button } from 'react-bootstrap'

const LocationCard = ({id, alt, img, storeHeadline, locationHeadline, street, city, days, hours, phone, directionsButtonUrl, directionsButtonLabel}) => {

    const locationInfo = [locationHeadline, street, city, days, hours, phone];
    return (
        <Card
            id={id}
            alt={alt}
            bg="light"
            key="dark"
            text="dark"
            >
            <Card.Img variant="top" src={img} style={{ objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{storeHeadline}</Card.Title>
                {locationInfo.map((information) => (
                    <Card.Text>{information}</Card.Text>
                ))}
                <Card.Text></Card.Text>
            </Card.Body>
            <Button variant="warning" size="lg" href={directionsButtonUrl}>
                {directionsButtonLabel}
            </Button>
        </Card>
    )
}

export default LocationCard