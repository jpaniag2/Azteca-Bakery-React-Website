import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
//import HeroTaqueriaStore from '../../images/TacosHero.png'

export const HeroContainer = styled.div`
    background: #fff;
    ${'' /* background-image: ${`url(${HeroTaqueriaStore})`};
    background-repeat: no-repeat;
    background-size: 100%; */}
    margin-top: 60px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    height: 465px;
    width:100%;
    position: relative:;
    
    z-index: 1;

    ${'' /* :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } */}


    @media screen and (max-width: 1024px){
        background-size: cover;
    }

    @media screen and (max-width: 450px){
        width: 100%;
        background-size: center;
    }
`

export const HeroBg = styled.div`
    ${'' /* background-image: ${`url(${HeroTaqueriaStore})`};
    background-repeat: no-repeat;
    background-size: 1000px;
    margin-left: 150px; */}
    position: absolute;
    height: 100%;
    
    
    ${'' /* width: 1200px;
    height: 740px; */}
    overflow: hidden;


    ${'' /* border: solid;
border-color: #000;
border-top-width: 0px;
border-right-width: 0px;
border-bottom-width: 10px;
border-left-width: 0px; */}

`

export const VideoBg = styled.video`
    width: 985px;
    height: 63%;
    -o-object-fit: none;
    object-fit: cover;
    background-color: transparent;
    border-radius: 150px;
    
    margin-top: 135px;
    overflow: hidden;
    ${'' /* background: #232a34; */}

    @media screen and (max-width: 1024px){
        width: 100%;
        height: 57.2%;
        object-fit: cover;
    }

    @media screen and (max-width:450px){
        
        width: 100%;
        object-fit: cover;
    }
    
`

export const HeroContent = styled.div`
    background-color: #fff;
    opacity: 0.8;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media screen and (max-width: 1024px){
        margin-top: 70px;
        max-width: 500px;
        z-index: 1;
        align-items: center;
    }

    @media screen and (max-width: 450px){
        margin-top: 140px;
        max-width: 300px;
        z-index: 1;
        align-items: center;
    }
    
`

export const HeroH1 = styled.h1`
    font-family: 'Bellota Text', cursive;
    font-weight: 400;
    color: #000;
    font-size: 3rem;
    text-align: center;
    
    @media screen and (max-width: 1024px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const HeroP = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    margin-top: 24px;
    color: #000;
    font-size: 20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 1024px){
        font-size: 24px;
    }

    @media screen and (max-width: 450px){
        font-size: 14px;
    }

`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`