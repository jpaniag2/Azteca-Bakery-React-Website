import styled from 'styled-components'
import HeroBG from '../../images/HeroBG.png'

export const BakeryStyle = styled.div`
    .container{
        margin: 0% 0;
        padding: 0% 0%;
        margin-bottom: 15%;

        ${'' /* background-image: ${`url(${HeroBG})`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%; */}
        
        border-radius: 10px;
        ${'' /* background: #DAF0DE; */}

        @media screen and (max-width: 480px){
        padding: 0;
        ${'' /* background: #fff; */}
    }
    }

    .row{
        margin: 0px 0;
        padding: 0;
    }

    
`

export const Introduction = styled.p`
    padding-top: 5%;
    padding-bottom: 0%;
    margin-bottom: 10px;
    font-size: 6rem;
    font-family: 'Bellota Text', cursive;
    line-height: 1.1;
    font-weight: 400;
    text-align: center;
    color: ${({lightText}) => (lightText ? '#111' : '#000')};

    @media screen and (max-width: 1200px){
        font-size: 4rem;
        padding-top: 10%;
    }

    @media screen and (max-width: 480px){
        font-size: 3rem;
        padding-top: 0%;
        padding-bottom: 0%;
        margin-bottom: 100px;
        height: 0px;
    }
`