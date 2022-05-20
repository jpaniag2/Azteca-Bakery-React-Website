import styled from "styled-components"

export const Container = styled.div`
    
    margin-top: 0%;
    padding-left: 1%;
    padding-right: 1%;
    overflow: hidden;
    border-radius: 30px;

    @media screen and (max-width: 1124px){
        padding-left: 0;
        padding-right: 0;
        margin-left: 0%;
        margin-right: 0%;
    }
    @media screen and (max-width: 450px){
        margin-left: 0%;
        margin-right: 0%;
        padding-bottom: 15%;
    }
`

export const LocationContentWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 8px;
    padding: 0 0px;

    @media screen and (max-width: 1124px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 450px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const LocationContentCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    align-items: center;
    border-radius: 10px;
    height: 100%;
    ${'' /* max-height: 600px;
    min-height: 340px; */}
    padding: 30px;
    ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out; */}

    ${'' /* &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
    } */}

    @media screen and (max-width: 450px){
        padding: 0;
        padding-bottom: 30px;
    }

`

export const Introduction = styled.p`
    padding-top: 5%;
    padding-bottom: 0%;
    margin-bottom: 10%;
    font-size: 6rem;
    font-family: 'Bellota', cursive;
    line-height: 1.1;
    font-weight: 400;
    text-align: center;
    color: ${({lightText}) => (lightText ? '#111' : '#000')};

    @media screen and (max-width: 1200px){
        font-size: 4rem;
    }

    @media screen and (max-width: 480px){
        font-size: 3rem;
        padding-bottom: 0%;
        margin-bottom: 0px;
        padding-top: 15%;
        padding-bottom: 0%;
    }
`