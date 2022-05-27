import styled from 'styled-components'

export const TextWrapper = styled.div`
    width: 100%;
    padding-top: 60px;
    padding-left: 5%;
    position: absolute;
    text-align: center; 
    
`

export const Introduction = styled.p`
    margin-bottom: 24px;
    font-size: 4rem;
    font-family: 'Pacifico', cursive;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#ce202a')};

    @media screen and (max-width: 1024px){
        color: transparent;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const TopLine = styled.p`
    color: #000;
    font-size: 1.5rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;

    @media screen and (max-width: 1024px){
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px){
        color: #ce202a;
        font-size: .9rem;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 6rem;
    font-family: 'Bellota Text', cursive;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#000')};

    @media screen and (max-width: 1024px){
        font-size: 4rem;
    }
    @media screen and (max-width: 480px){
        margin-bottom: 0px;
        font-size: 2rem;
    }
`

export const Subtitle = styled.p`
    color: #ce202a;
    font-size: 2rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;
    @media screen and (max-width: 1024px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 480px){
        font-size: .9rem;
    }
`