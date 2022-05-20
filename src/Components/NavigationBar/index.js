import React, {useState, useEffect} from 'react';
import {GiStairsCake} from 'react-icons/gi'
import { animateScroll as scroll } from 'react-scroll/modules';
import '../NavigationBar/index.css';


import { 
        Navigation, 
        NavBarContainer, 
        Logo, 
        MobileIcon, 
        NavigationMap, 
        NavigationLinks,
        NavigationItem,
        LogoDemo
    } from './NavigationElements'


const NavigationBar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY > 0){
            setScrollNav(true)
    } else{
        setScrollNav(false)
    }
}

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return <>
      <Navigation scrollNav={scrollNav}>
          <NavBarContainer>

            <LogoDemo to='/' onClick={toggleHome}></LogoDemo>
            <Logo>La Acapulqueña</Logo>
              <MobileIcon onClick={toggle}>
                  <GiStairsCake /> 
              </MobileIcon>
              <NavigationMap>
                    <NavigationItem>
                      <NavigationLinks to="menu" smooth={true} duration={500} spy={true} exact='true' offset={-60}>MENU</NavigationLinks>
                    </NavigationItem>
              
                    <NavigationItem>
                      <NavigationLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-60}>SERVICES</NavigationLinks>
                    </NavigationItem>

                    <NavigationItem>
                      <NavigationLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-60}>ABOUT US</NavigationLinks>
                    </NavigationItem>


              </NavigationMap>
 
              <NavigationMap>
              <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async ></script>
    <span class="orderButtonNav"
        data-glf-cuid="63dc2781-40ad-42c5-8d6e-de40e318f5e8" 
        data-glf-ruid="45490a91-1344-463e-b1ac-782d6a5779df"> ORDER PICK-UP
    </span>
              </NavigationMap>

          </NavBarContainer>
      </Navigation>
  </>

}

export default NavigationBar;