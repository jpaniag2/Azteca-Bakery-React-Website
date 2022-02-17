import styled from "styled-components"

export const CarouselContainer = styled.div`
    background-color: #fff;
    height: 650px;
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