import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import Logo from '../../images/DarkGreenLogo.png'
import './index.css';

const NavStyle = styled.div`
    .navbar{
        background-color: #fff;
        color: #00211a !important;
        max-height: 60px;
    }
    .nav-link{
        margin-top: 3px;
        font-family: 'Khula', sans-serif;
        font-weight: 300;
        font-size: 1.5rem;
    }
    .navbar-brand{
        font-weight: 400;
        font-size: 2.3rem;
        font-family: 'Julius Sans One', sans-serif;
        font-weight: 600;

        &:hover{
            cursor: pointer;
            color: #585858 !important;
        }

        @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }

    }
    .nav-item{
        padding: 5px;
    }
    .navbar-collapse{
        text-align: center;
        background-color: #fff;
        opacity: 0.9;
    }
    img{
        
    }

    a{
        padding: 5px 15px;
        color: #00211a !important;
        &:hover{
            transition: 0.5s all ease;
            opacity: 0.8;
            color: #bae8d4 !important;
         }
    }
`;

const NavBar = () => {

    return (

        <NavStyle>

            <Navbar collapseOnSelect expand="lg" fixed='top'>
                <Container>

                    <Navbar.Brand href='/'>
                        <img
                            src={Logo}
                            width="50"
                            height="50"
                            className="d-inline-block"
                            alt="logo"

                        /> Azteca Bakery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav navbarScroll>
                            <Nav.Link href='/cake'> Cakes</Nav.Link>
                            <Nav.Link href='/bread'> Bread</Nav.Link>
                            <Nav.Link href='/locations'> Locations</Nav.Link>

                            <Nav.Link eventKey={2} href="#memes">

                            </Nav.Link>
                            <Nav.Item >
                                <a href="https://www.instagram.com/aztecapanycakes/" target="_blank"><FaInstagram size='2.5rem' /></a>
                            </Nav.Item>
                            <Nav.Item>
                                <a  href="https://www.facebook.com/AztecaMexicanProductsBakery" target="_blank"><FaFacebook size='2.5rem' /></a>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NavStyle>
    )

}

export default NavBar;