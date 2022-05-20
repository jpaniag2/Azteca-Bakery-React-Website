import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const Navigation = styled.nav`
    ${'' /* background-color: #181818; */}
    background-color: #2F2F41;
    ${'' /* background-color: #DAAB; */}
    background-color: #B0E3EA;
    width: 100%;
    max-width: 110px;
    transition: ${({scrollNav}) => (scrollNav ? '0.6s all ease' : '0.8s all ease')};
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    padding: 0px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;

@media screen and (max-width: 1024px){
    transition: 0.8s all ease;
    display: none;

}

@media screen and (max-width: 450px){
    display: flex;
}

`

export const NavBarContainer = styled.div`
    display: flex;
    
    z-index: 1;
    
    padding-bottom: 30px;
`



export const NavigationMap = styled.ul`
    display: grid;
    align-items: center;
    list-style: none;
    text-align: center;

`


export const NavigationItem = styled.li`
    height: 80px;

`

export const NavigationLinks = styled(LinkScroll)`
    font-family: 'Cormorant', serif;
    font-weight: 400;
    color: #000;
    display: inline-grid;
    align-items: center;
    text-decorations: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.2rem;

    @media screen and (max-width: 1024px){
        font-size: 12px;
    }
    @media screen and (max-width: 450px){
        display: none;
    }

    &.active{
        border-bottom: 3px solid #FDB3CA;
    }

    &: hover{
            color: #000;
            transition: 0.5s all ease;
        }

`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 250px;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 1024px){
        height: 450px;
        padding-top: 40px;
        border-radius: 0;
        object-fit: contain;
    }
    @media screen and (max-width: 450px){
        padding-top: 0px;
        object-fit: contain;
        border-radius: 0;
        padding-top: 10px;
        
    }
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        color: #000;
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const BusinessName = styled.div`
    margin-top: 1px;
    margin-left: 0%;
    margin-bottom: 1px;
    color: #000;
    font-family: 'Julius Sans One', sans-serif;
    font-weight: 600;
    justify-self: flex-start;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    align-left: 24px;
    text-decoration: none;
    white-space: pre;

@media screen and (max-width: 1024px){
        margin-left: 20%;
        margin-right: 10%;
    }

    @media screen and (max-width: 450px){
        font-size: 1.2rem;
        margin-right: 25%;
        margin-left: 0;
    }

`
