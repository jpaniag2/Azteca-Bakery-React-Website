import styled from 'styled-components'
import AboutBG from '../../images/AboutBG.png'

export const InfoContainer = styled.div`

.container{
    color: #fff;

    ${'' /* background: ${({lightBg}) => (lightBg ? '#F3EDE1' : '#F3EDE1')};  */}
    ${'' /* background: ${({lightBg}) => (lightBg ? '#F4F4F4' : '#F4F4F4')}; */}
    ${'' /* background: ${({lightBg}) => (lightBg ? '#D9F1F1' : '#D9F1F1')}; */}
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: 0%;

    ${'' /* border-radius: 20px; */}
}


    @media screen and (max-width: 1024px){
        padding: 100px 0;
    }
    @media screen and (max-width: 1024px){
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0%;
        margin-right: 0%;
        border-radius: 0px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 2100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px;
    justify-content: center;
    margin-bottom: 5%;

    ${'' /* background-image: ${`url(${AboutBG})`};
    background-position: right;
    background-repeat: no-repeat;
    background-size: 100%; */}

    @media screen and (max-width: 1024px){

        height: 100%;
    }
    @media screen and (max-width: 480px){
        background-image: none;
        height: 100%;
    }
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 1024px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    ${'' /* margin-bottom: 0px;
    margin-left: -4rem;
    margin-right: 12rem;
    padding: 30px; */}
    padding-left: 12rem;
    grid-area: col1;
    background: transparent;
    border-radius: 5px;
    ${'' /* box-shadow: 3px 3px 3px #000; */}


    @media screen and (max-width: 1024px){
        padding-left: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
        border-radius: 30px;
    }
    
`
export const Column2 = styled.div`
    margin-right: -12rem;
    margin-left: 5rem;
    padding: 0 0;
    grid-area: col2;
    
    

    @media screen and (max-width: 1024px){
        margin-right: 0rem;
        margin-left: 0rem;
        margin-bottom: 50px;
        margin-top: -100px;
        
}
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 10px;
    padding-top: 5%;

    @media screen and (max-width: 1024px){
        max-width: 540px;
        padding: 10px;
        padding-top: 0%;
    }
    
`

export const TopLine = styled.p`
    color: #FDB3CA;
    font-family: 'Bellota', cursive;
    font-weight: 400;
    font-size: 5rem;
    line-height: 90px;
    margin-bottom: 16px;

    @media screen and (max-width: 480px){
        font-size: 3rem;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 2.5rem;
    font-family: 'Bellota Text', cursive;
    font-weight: 400;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#666666' : '#666666')};

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const Subtitle = styled.p`
    font-family: 'Bellota Text', cursive;
    font-weight: 400;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.5rem;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#666666' : '#111')};

    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-right: 50%;

    @media screen and (max-width: 450px){
        margin-left: 30%;
    }
`

export const ImgWrap = styled.div`

        height: 100%;
        
    @media screen and (max-width: 1024px){
        height: 600px;
    }
    @media screen and (max-width: 450px){
        height: 400px;
    }

`

export const Img = styled.img`

    width: 100%;
    height: 600px;
    margin: 0 0 10px 0;
    padding-right: 0;
    object-fit: contain;
    ${'' /* border-radius: 15%;
    border: 8px solid #EFEFEF;; */}

    ${'' /* border-top-left-radius: 20px;
    border-bottom-left-radius: 20px; */}
    

    @media screen and (max-width: 1024px){
        width: 100%;
        padding-top: 0px;  
        object-fit: contain;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-radius: 5%;
        border: none;
    }
    @media screen and (max-width: 450px){
        height: 500px;
        padding-top: 0px;
        object-fit: cover;
        padding-top: 2px;

        border-radius: 0%;
        border: none;

        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        
    }
`