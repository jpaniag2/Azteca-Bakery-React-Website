import styled from 'styled-components'
import {motion} from 'framer-motion'
//import HeroBG from '../../images/HeroBG.svg'
import HeroBG from '../../images/HeroBG.png'
import CoverImageMobile from '../../images/CoverImageMobile.jpg'

export const InfoContainer = styled.div`
    color: #fff;
    margin-top: 0px;
    border-radius: 0px;
    background-image: ${`url(${HeroBG})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;



    @media screen and (max-width: 1024px){
        padding: 100px 0;

    }

    @media screen and (max-width: 450px){
       margin-top: 20px;
       border-radius: 0px;
       height: 800px;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    ${'' /* background: #EFEFEF; */}

    @media screen and (max-width: 1024px){
        height: 800px;
 }
`
export const Image = styled(motion.img)`

        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 300px;
        z-index: 0;

        @media screen and (max-width: 1024px){
            display: none;
        }

`
export const Image2 = styled.img`

            display: none;

        @media screen and (max-width: 1024px){
            display: flex;
            margin-left: 25%;
            width: 100%;
            height: 100%;
            max-width: 300px;
            max-height: 300px;
            z-index: -1;
        }

`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1'`)};

    @media screen and (max-width: 1024px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    ${Image}:nth-child(3){
        margin-top: 0%;
        margin-left: 25px;
    }
    ${Image}:nth-child(2){
        margin-top: 0%;
        margin-left: 45px;
    }
    ${Image}:nth-child(1){
        margin-top: 0%;
        margin-left: 25px;
    }
`

export const TextWrapper = styled.div`
    max-width: 1000px;
    padding-top: 0;
    padding-bottom: 60px;
    text-align: center;

    @media screen and (max-width: 480px){
        margin-left: 0%;
    }
`

export const Introduction = styled.p`
    margin-bottom: 24px;
    font-size: 10rem;
    font-family: 'Pacifico', cursive;
    line-height: 1.1;
    font-weight: none;
    color: ${({lightText}) => (lightText ? '#111' : '#fff')};
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 4rem;
    }
`

export const TopLine = styled.p`
    color: #000;
    font-size: 1.5rem;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;
    
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 8rem;
    font-family: 'Julius Sans One', sans-serif;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#000')};

    @media screen and (max-width: 480px){
        font-size: 5rem;
    }
`

export const Subtitle = styled.p`
    color: #000;
    font-size: 1.5rem;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;

`

export const ImgWrap = styled.div`
    max-width: 100%;
    height: 100%;

    @media screen and (max-width: 1024px){
        height: 800px;
    }

`

export const Img = styled.img`
    width: 100%;
    height: 700px;
    object-fit: cover;
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