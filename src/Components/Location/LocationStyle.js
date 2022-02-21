import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #ECEEEA;
    ${'' /* background-image: ${`url(${HeroTaqueriaStore})`};
    background-repeat: no-repeat;
    background-size: 100%; */}
    margin-top: 0px;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    height: 400px;
    width:100%;
    position: relative:
    z-index: 1;

    ${'' /* :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } */}


    @media screen and (max-width: 1024px){
        background-size: cover;
    }

    @media screen and (max-width: 450px){
        width: 100%;
        background-size: center;
    }
`