import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
//import logo from '../../images/HappyTaco.png'
// import logo from '../../images/LogoDemo.png'
// import logo from '../../images/AztecaLogo14.png'


export const Navigation = styled.nav`
    ${'' /* background-color: #222021; */}
    background-color: #fff;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #E3E3E1;
    margin-left: 10%;
    margin-right: 10%;

@media screen and (max-width: 1024px){
    transition: 0.8s all ease;
    height: 150px;
    margin-left: 0%;
    margin-right: 0%;
}

@media screen and (max-width: 450px){
    height: 100px;
}

`

export const NavBarContainer = styled.div`
    display: flex;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const BrandContainer = styled.div`
    display: flex;
    justify-content: center;
    ${'' /* background-repeat: no-repeat;
    background-image: ${`url(${logo})`};
    background-size: contain; */}
    height: 120px;
    width: 120px;
    margin-top: 15px;
`

export const Logo = styled(LinkR)`
    ${'' /* background-image: ${`url(${logo})`}; */}
    background-size: contain;
    margin-top: 60px;
    background-repeat: no-repeat;
    background-color: transparent;
    height: 120px;
    width: 80px;
    transition: 0.8s all ease;

&: hover{
    opacity: .8;
    transition: 0.8s all ease;
}

@media screen and (max-width: 1024px){
    padding: 0px 12px;
    background-color: transparent;
    border: none;
}

@media screen and (max-width: 450px){
    margin-top: -10px;
    margin-right: 40px;
    padding: 0px 12px;
    background-position: bottom ;
    background-color: transparent;
    border: none;
    height: 80px;
    width: 90px;
}

`

export const BusinessName = styled.div`
    margin-top: 10px;
    margin-left: 6%;
    color: #4B4B4B;
    font-family: 'Bellota', cursive;
    font-weight: Regular 400;
    justify-self: flex-start;
    font-size: 3rem;
    display: flex;
    align-items: center;
    align-left: 24px;
    text-decoration: none;

    @media screen and (max-width: 1024px){
        border: none;
        font-size: 3rem;
    }

    @media screen and (max-width: 450px){
        font-size: 2rem;
    }

`

export const BusinessName2 = styled.div`
    margin-top: 50px;
    margin-left: 10px;
    color: #000;
    font-family: 'Great Vibes', cursive;
    justify-self: flex-start;
    font-size: 2rem;
    display: flex;
    align-items: center;
    align-left: 18px;
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
        color: #fff;
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
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: semi-bold 600;
    color: #232323;
    display: flex;
    align-items: center;
    text-decorations: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.1rem;
    margin-top: 3rem;

    &.active{
        border-bottom: 4px solid #FF6302;
    }

    &: hover{
            color: #01bf71;
            transition: 0.5s all ease;
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