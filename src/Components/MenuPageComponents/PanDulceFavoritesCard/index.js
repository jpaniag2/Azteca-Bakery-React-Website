import React from 'react'
import { Card, Button, Nav, Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`

    .nav-link{
        border:1px solid transparent;
        transition: 0.5s ease-out;
        opacity: 1;
        backgroundColor: #000;
        max-width: 100%;

        &:hover{
            cursor: inherit;
            transform: translateY(-10px);
            transition:  0.5s ease-out;
        }
    }

    .card-img-top{
        height: 320px ;
        width: 100% ;
        object-fit: cover !important;
        position: center;

        @media screen and (max-width: 480px){
        height: 350px;
    }
    }

`

const PanDulceFavoritesCard = ({img, title}) => {
    return (
        <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
            <Styles>
                <Nav.Link href="">
                    <Card.Img variant="top" src={img} />
                </Nav.Link>
            </Styles>



            <Card.Body >
                <Card.Title style={{ fontFamily: 'Khula', fontSize: '1.3rem', fontWeight: '600' }}>{title}</Card.Title>
            </Card.Body>
            {/* <Card.Footer>
            <Button variant="warning" href={linkRoute}>Warning</Button>
        </Card.Footer> */}
        </Card>
    )
}

export default PanDulceFavoritesCard