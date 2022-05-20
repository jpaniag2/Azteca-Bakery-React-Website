import React, { useState, useEffect } from 'react';
import { GiStairsCake } from 'react-icons/gi'
import { animateScroll as scroll } from 'react-scroll/modules';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.png'
import './index.css';


import {
    Navigation,
    Navigation2,
    NavBarContainer,
    BusinessName,
    BusinessName2,
    MobileIcon,
    NavigationMap,
    NavigationLinks,
    NavigationItem,
    Logo,
    BrandContainer
} from './NavBarStyle'


const NavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 50) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const navigate = useNavigate();

    return (<>

        <Navigation >
            <NavBarContainer>
                <MobileIcon onClick={toggle}>
                    <GiStairsCake />
                </MobileIcon>
            <img
                        alt="Azteca Logo"
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top img"
                        onClick={()=> {navigate('/')}}
                        
                    />

                <NavigationMap>

                    <NavigationItem>
                        <NavigationLinks to="/" onClick={()=> {navigate('/cakespage')}} smooth={true} duration={500} spy={true} exact='true' offset={-60}>CAKES</NavigationLinks>
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationLinks onClick={()=> {navigate('/locations')}} smooth={true} to="/" duration={500} spy={true} exact='true' offset={-60}>LOCATIONS</NavigationLinks>
                    </NavigationItem>

                </NavigationMap>
            </NavBarContainer>

            <BusinessName to='/' onClick={toggleHome}>AZTECA BAKERY</BusinessName>
        </Navigation>


        {/* <Navigation2>
            
            <NavigationMap>
            </NavigationMap>
            <Logo to='/' onClick={toggleHome}></Logo>
            


            <MobileIcon onClick={toggle}>
                    <GiTacos />
                </MobileIcon>

        </Navigation2> */}

            </>
    )

}

export default NavBar;