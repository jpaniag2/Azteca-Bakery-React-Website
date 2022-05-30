import styled from 'styled-components'
import HeroBG from '../../images/CakeCoverIcon1.png'
import AboutBG from '../../images/AboutBG.png'

export const InfoContainer = styled.div`

    ${'' /* background: ${({lightBg}) => (lightBg ? '#F3EDE1' : '#F3EDE1')};  */}
    ${'' /* background: ${({lightBg}) => (lightBg ? '#F4F4F4' : '#F4F4F4')}; */}
    background: #fff;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 20px;
    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (max-width: 1024px){
        padding: 100px 0;
    }

`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    
    width: 100%;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px;
    justify-content: center;
    padding-top: 10%;
    padding-bottom: 10%;
    

    @media screen and (max-width: 1024px){
        height: 1000px;
    }
    @media screen and (max-width: 450px){
        height: 1000px;
    }
`
export const TopLine = styled.p`
    color: ${({isFirstHeading}) => (isFirstHeading ? '#FFFF' : '#F5F5F5')};;
    font-family: 'Bellota', cursive;
    font-weight: 400;
    font-size: 6rem;
    line-height: 160px;
    margin-bottom: 36px;
    padding: 10% 0;
    text-align: center;

    @media screen and (max-width: 1200px){
        font-size: 4rem;
    }

    @media screen and (max-width: 480px){
        line-height: 100px;
        font-size: 2rem;
    }
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 2rem;
    font-family: 'Bellota Text', cursive;
    font-weight: 400;
    line-height: 1.1;
    text-align: center;
    color: ${({lightText}) => (lightText ? '#000' : '#000')};

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const Subtitle = styled.h1`
    font-family: 'Bellota Text', cursive;
    font-weight: 300;
    max-width: 800px;
    margin-bottom: 35px;
    font-size: 1.2rem;
    line-height: 24px;
    line-height: 3rem;
    text-align: center;
    color: ${({darkText}) => (darkText ? '#666666' : '#111')};

    @media screen and (max-width: 1024px){
        margin-left: 0;
        max-width: 440px;
    }
    
    @media screen and (max-width: 480px){
        margin-left: 0;
        font-size: 1.1rem;
    }

`

export const TextWrapper = styled.div`
    padding: 10px;
    
`
