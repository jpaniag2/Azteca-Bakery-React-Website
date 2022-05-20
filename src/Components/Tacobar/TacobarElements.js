import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const TacobarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #2D2E2E;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    
    opacity: ${({ isOpen})=> (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
    
    
`

export const CloseIcon = styled(FaTimes)`
    margin-top: 40px;
    margin-right: 10px;
    color: #ABD9B5;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const TacobarWrapper = styled.div`
    color: #fff;
`

export const TacobarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    a{
        color: #fff;
        padding: 5px 15px;

        &:hover{
            transition: 0.5s all ease;
            opacity: 0.8;
            color: #ABD9B5 !important;
         }
    }

    @media screen and (max-width: 450px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const TacobarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-family: 'Bellota Text', cursive;
    font-weight: 400;

    &:hover {
        color: #ABD9B5;
        transition: 0.2s ease-in-out;
    }
`

export const TacoBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const TacobarRoute = styled(LinkR)`    
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`
