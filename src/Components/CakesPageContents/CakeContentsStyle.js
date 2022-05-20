import styled from "styled-components"

export const CakeContainer = styled.div`
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
        margin-top: 100px;
    }
    @media screen and (max-width: 450px){
        
        margin-left: 0%;
        margin-right: 0%;
    }
`

export const Style = styled.div`

${'' /* background-image: ${`url(${HeroBG})`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%; */}
    .container{
        overflow: hidden;
    }
`