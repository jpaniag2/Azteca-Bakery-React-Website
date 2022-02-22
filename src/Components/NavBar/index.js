import React, { useState, useEffect } from 'react';
import { GiTacos } from 'react-icons/gi'
import { animateScroll as scroll } from 'react-scroll/modules';
import { useNavigate } from 'react-router-dom';
// import './index.css';


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

        <Navigation scrollNav={scrollNav}>
        <BusinessName to='/' onClick={toggleHome}>AZTECA BAKERY</BusinessName>
            <NavBarContainer>
                <NavigationMap>
                
                    {/* <NavigationItem>
                        <NavigationLinks to='/' onClick={toggleHome}  smooth={true} duration={500} spy={true} exact='true' offset={-60}>TOP PAGE</NavigationLinks>
                    </NavigationItem> */}
{/* 
                    <NavigationItem>
                        <NavigationLinks to="cakes" smooth={true} duration={500} spy={true} exact='true' offset={-60}>ABOUT</NavigationLinks>
                    </NavigationItem> */}

                    <NavigationItem>
                        <NavigationLinks to="location" smooth={true} duration={500} spy={true} exact='true' offset={-60}>LOCATIONS</NavigationLinks>
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationLinks to="/" onClick={()=> {navigate('/cakespage')}} smooth={true} duration={500} spy={true} exact='true' offset={-60}>CAKES</NavigationLinks>
                    </NavigationItem>


                    <NavigationItem>
                        <NavigationLinks to="/" smooth={true} duration={500} spy={true} exact='true' offset={-140}>SOCIALS</NavigationLinks>
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationLinks to="/" smooth={true} duration={500} spy={true} exact='true' offset={-100}>GALLERY</NavigationLinks>
                    </NavigationItem>


                </NavigationMap>
            </NavBarContainer>
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