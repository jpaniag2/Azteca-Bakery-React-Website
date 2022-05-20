import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import  logoDemo from '../../images/Logo.png'

export const Navigation = styled.nav`
${'' /* background-image: ${`url(${NavPicture})`};
background-size: cover; */}
background-color: #2D2E2E;
height: 60px;
display: flex;
border: solid;
border-color: #F59056;
border-top-width: 0px;
border-right-width: 0px;
border-bottom-width: 0px;
border-left-width: 0px;

justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 1024px){
    transition: 0.8s all ease;
}
`
export const OrderNavigation = styled.nav`
background: #000;
height: 60px;
display: flex;

justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 1024px){
    transition: 0.8s all ease;
}
`
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const LogoDemo = styled(LinkR)`
background-image: ${`url(${logoDemo})`};
background-size: contain;
background-repeat: no-repeat;
background-color: transparent;
height: 120px;
width: 130px;
transition: 0.8s all ease;

&: hover{
    opacity: .8;
    transition: 0.8s all ease;
    ${'' /* background-color: #016341;
    transition: 0.8s all ease; */}
}

@media screen and (max-width: 1024px){
    padding: 0px 12px;
    background-color: transparent;
    border: none;
}

@media screen and (max-width: 450px){
    padding: 0px 12px;
    background-position: bottom ;
    background-color: transparent;
    border: none;
    padding-top: 80px;
    height: 50px;
    width: 60px;
}

`

export const Logo = styled.div`
    color: #f6f6f6;
    font-family: 'Sofia', cursive;

    ${'' /* font-family: 'Playfair Display', serif;
    font-weight: 400; */}

${'' /* font-family: 'Cinzel Decorative', cursive;
font-family: 'Cormorant', serif;
font-family: 'IM Fell English', serif;
font-family: 'IM Fell English SC', serif; */}
    justify-self: flex-start;
    font-size: 2rem;
    display: flex;
    align-items: center;
    align-left: 24px;
    font-weight: bold;
    text-decoration: none;
    left: 0;

    @media screen and (max-width: 1024px){
        border: none;
        margin-right: 35px;
        padding-right: 50px;
        font-size: 2rem;
    }

    @media screen and (max-width: 450px){
        font-size: 1.5rem;
    }

`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1024px){
        color: #000;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavigationMap = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 1024px){
        display: none;
    }
`

export const NavigationItem = styled.li`
    height: 60px; 

`

export const NavigationLinks = styled(LinkScroll)`
    color: #f6f6f6;
    display: flex;
    align-items: center;
    text-decorations: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Patua One', cursive;
    font-weight: 400;
    ${'' /* font-weight: bold;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #F3EDE1;  */}

    &.active{
        border-bottom: 3px solid #FF6302;
    }

    &: hover{
            color: #FF6302;
            transition: 0.3 ease-out;
        }

`
export const NavigationButton = styled.nav`
    display: flex;
    align-items: center;
    padding: 5px 15px;

    @media screen and (max-width: 1024px){
        display: none;
    }
`
export const NavigationButtonLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &: hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`