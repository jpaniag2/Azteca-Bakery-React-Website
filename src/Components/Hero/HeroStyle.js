import styled from 'styled-components'

export const InfoContainer = styled.div`

    ${'' /* background: ${({lightBg}) => (lightBg ? '#F3EDE1' : '#F3EDE1')};  */}
    ${'' /* background: ${({lightBg}) => (lightBg ? '#F4F4F4' : '#F4F4F4')}; */}
    background: #fff;
    margin-top: -40px;
    margin-bottom: 10px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 20px;
    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (max-width: 1024px){
        padding: 0px 0;
        margin-top: -40px;
        margin-bottom: -50px;
        
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px;
    justify-content: center;

    @media screen and (max-width: 1024px){
        height: 750px;
    }
    @media screen and (max-width: 450px){
        height: 550px;
    }
`
export const TopLine = styled.p`
    color: #FDB3CA;
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    font-size: 8rem;
    line-height: 160px;
    margin-bottom: 16px;
    text-align: center;

    @media screen and (max-width: 1024px){
        font-size: 7.2rem;
        
    }
`

export const TextWrapper = styled.div`
    padding: 10px;
    
    
`

export const VideoBg = styled.video`
    width: 100%;
    height: 80%;
    -o-object-fit: none;
    object-fit: cover;
    background-color: transparent;
    ${'' /* background: #232a34; */}

    @media screen and (max-width: 1024px){
        height: 69%px;
        object-fit: contain;
        height: 60%;
    }

    @media screen and (max-width:450px){
        height: 320px;
        object-fit: contain;
    }
    
`
export const HeroBg = styled.div`
    ${'' /* background-image: ${`url(${HeroTaqueriaStore})`};
    background-repeat: no-repeat;
    background-size: 1000px;
    margin-left: 150px; */}
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    ${'' /* width: 1200px;
    height: 740px; */}
    overflow: hidden;


    ${'' /* border: solid;
border-color: #000;
border-top-width: 0px;
border-right-width: 0px;
border-bottom-width: 10px;
border-left-width: 0px; */}

`