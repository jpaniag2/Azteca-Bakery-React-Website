import styled from "styled-components"

export const Container = styled.div`
    background-color: #fff;
    margin-top: 3%;
    padding-left: 15%;
    padding-right: 15%;
    overflow: hidden;

    @media screen and (max-width: 1124px){
        padding-left: 0;
        padding-right: 0;
        margin-left: 3%;
        margin-right: 3%;
    }
    @media screen and (max-width: 450px){
        margin-left: 0%;
        margin-right: 0%;
    }
`