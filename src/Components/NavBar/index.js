import React, { useState, useEffect } from 'react';
import { GiTacos } from 'react-icons/gi'
import { animateScroll as scroll } from 'react-scroll/modules';
// import './index.css';


import {
    Navigation,
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
        if (window.scrollY > 0) {
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

    return (<Navigation scrollNav={scrollNav}>
        <NavBarContainer>
{/* 
        <NavigationMap>
        </NavigationMap> */}
        {/* <Logo to='/' onClick={toggleHome}></Logo> */}
        <BusinessName>azteca bakery</BusinessName>
        <NavigationMap>
                <NavigationItem>
                    <NavigationLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavigationLinks>
                </NavigationItem>
            </NavigationMap>

            <NavigationMap>
                <NavigationItem>
                    <NavigationLinks to="cakes" smooth={true} duration={500} spy={true} exact='true' offset={-140}>Cakes</NavigationLinks>
                </NavigationItem>
            </NavigationMap>

            <NavigationMap>
                <NavigationItem>
                    <NavigationLinks to="pastries" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Pastries</NavigationLinks>
                </NavigationItem>
            </NavigationMap>

            <MobileIcon onClick={toggle}>
                <GiTacos />
            </MobileIcon>

        </NavBarContainer>
    </Navigation>
    )

}

export default NavBar;