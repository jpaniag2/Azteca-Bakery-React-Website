import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';
import logo from '../../images/Logo.png'
import AztecaLogo from '../../images/AztecaLogo7.png'
import AztecaLogo2 from '../../images/AztecaLogo9.png'
import {GiHamburgerMenu} from 'react-icons/gi'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'



import {
    Navigation,
    NavBarContainer,
    NavigationMap,
    NavigationLinks,
    NavigationItem,
    Img,
    MobileIcon,
    BusinessName,
    BusinessName2

} from './SideBarNavStyle'

const NavStyle = styled.div`
    .navbar{
        background-color: #fff;
        padding: 0px 20px;
        
    }

     .navbar-nav{
        margin-right: 10rem;
    }
    .nav-link{
        color: #000 !important;
        font-family: 'Bellota Text', cursive;
        font-weight: 400;
        font-size: 1.2rem;
        

        &:hover{
            color: #DAF0DE !important;
        }
    }

    .navbar-brand{
        margin-left: 5%;
    }

    img{
         &:hover{
            transition: 0.5s all ease;
            opacity: 0.8;
            
         }
    }

    a{
        color: #000;
        padding: 5px 15px;

        &:hover{
            transition: 0.5s all ease;
            opacity: 0.8;
            color: #DAF0DE !important;
         }
    }
`;

const NavBar2 = ({toggle}) => {

    const [scrollNav] = useState(false);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (<>

        <NavStyle>
            <Navbar expand='md' fixed='top'>
              <MobileIcon onClick={toggle}>
                  <GiHamburgerMenu /> 
              </MobileIcon>
                <Navbar.Brand href='/'>
                    <img
                        alt="Azteca Logo"
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <BusinessName>AZTECA BAKERY</BusinessName>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link href='/menu'> Menu</Nav.Link>                    
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href='/locations'>Locations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <a href="https://www.instagram.com/aztecapanycakes/" target="_blank"><FaInstagram size='2rem'/></a>
                        </Nav.Item>

                        <Nav.Item>
                            <a href="https://www.facebook.com/AztecaMexicanProductsBakery" target="_blank"><FaFacebook size='2rem'/></a>
                        </Nav.Item>

                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavStyle>

    </>
    )

}

export default NavBar2;