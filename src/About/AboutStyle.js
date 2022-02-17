import styled from 'styled-components'

export const AboutContainer = styled.div`
    background-color: #222021;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;


    @media screen and (max-width: 1024px){
        height: 100%;
    }

    @media screen and (max-width: 480px){
        height: 100%;
    }
`

export const AboutWrapper = styled.div`
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 1em;
    padding-bottom: 50px;
    padding-top: 50px;

    @media screen and (max-width: 1024px){
        grid-template-columns: fr 1fr;
    }

    @media screen and (max-width: 450px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const AboutIcon = styled.img`
    height: 85%;
    width: 100%;
    margin-top: 100px;
    object-fit: cover;
    border-radius: 100px;

    @media screen and (max-width: 1024px){
        width: 100%;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        justify-content: flex-start;
    }

`
export const AboutH1 = styled.h1`
    margin-top: 40px;
    margin-left: 40px;
    font-size: 6rem;
    font-family: 'Great Vibes', cursive;
    font-weight: 400;
    color: #fff;
    margin-bottom: 64px;
    line-height: 1.1;
    align-items: center;
    align-text: center;


    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`

export const Subtitle = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 90px;
    line-height: 80px;
    color: #fff;

`