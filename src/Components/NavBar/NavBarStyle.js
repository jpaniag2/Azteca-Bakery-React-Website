import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
//import logo from '../../images/HappyTaco.png'
// import logo from '../../images/LogoDemo.png'
// import logo from '../../images/AztecaLogo14.png'


export const Navigation = styled.nav`
    ${'' /* background-color: #222021; */}
    background-color: #fff;
    height: ${({scrollNav}) => (scrollNav ? '60px' : '160px')};
    ${'' /* height: 60px; */}
    transition: ${({scrollNav}) => (scrollNav ? '0.6s all ease' : '0.8s all ease')};
    ${'' /* transition: 0.8s all ease; */}
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    padding: 0px 30px;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #E3E3E1;

@media screen and (max-width: 1024px){
    transition: 0.8s all ease;
    height: ${({scrollNav}) => (scrollNav ? '60px' : '140px')};

}

@media screen and (max-width: 450px){
    display: flex;
}

`
export const Navigation2 = styled.nav`
    ${'' /* background-color: #222021; */}
    background-color: #fff;
    height: ${({scrollNav}) => (scrollNav ? '80px' : '100px')};
    width: 100%;
    transition: ${({scrollNav}) => (scrollNav ? '0.6s all ease' : '0.8s all ease')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #E3E3E1;


@media screen and (max-width: 1024px){
    transition: 0.8s all ease;
    height: ${({scrollNav}) => (scrollNav ? '80px' : '140px')};

}

@media screen and (max-width: 450px){
    height: 60px;
}

`

export const NavBarContainer = styled.div`
    display: flex;
    height: 100%;
    z-index: 1;
    width: 100%;
    padding: 0px;
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
    margin-top: 0px;
    background-repeat: no-repeat;
    background-color: transparent;
    height: 100%;
    width: 10rem;
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

export const BusinessName = styled(LinkR)`
    margin-top: 10px;
    margin-left: 0.5rem;
    margin-bottom: 16px;
    color: #000;
    font-family: 'Bellota Text', cursive;
    font-weight: 400;
    justify-self: flex-start;
    font-size: 2rem;
    display: flex;
    align-items: center;
    align-left: 24px;
    text-decoration: none;
    cursor: pointer;
    white-space: pre;

    &: hover{
    opacity: .8;
    transition: 0.8s all ease;
    color: #01bf71; 
}

    @media screen and (max-width: 1024px){
        border: none;
        font-size: 2rem;
        margin-top: 10px;
        margin-left: 2rem;
        margin-bottom: 22px;
        padding: 0px;
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

`


export const NavigationItem = styled.li`
    height: 60px;

`

export const NavigationLinks = styled(LinkScroll)`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    color: #000;
    display: flex;
    align-items: center;
    text-decorations: none;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 13px;
    ${'' /* margin-top: ${({scrollNav}) => (scrollNav ? '1rem' : '2.6rem')}; */}
    ${'' /* margin-top: 3rem; */}

    @media screen and (max-width: 1024px){
        font-size: 12px;
    }
    @media screen and (max-width: 450px){
        display: none;
    }

    &.active{
        border-bottom: 3px solid #666666;
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
    background: #fff;
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