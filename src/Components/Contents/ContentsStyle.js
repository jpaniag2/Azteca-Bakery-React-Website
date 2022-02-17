import styled from "styled-components"

export const Container = styled.div`
    background-color: #fff;
    margin-left: 15%;
    margin-right: 15%;

    @media screen and (max-width: 1024px){
        margin-left: 3%;
        margin-right: 3%;
    }
    @media screen and (max-width: 450px){
        margin-left: 0;
        margin-right: 0;
    }
`