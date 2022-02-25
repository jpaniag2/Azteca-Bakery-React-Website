import styled from 'styled-components'

export const InfoContainer = styled.div`

    ${'' /* background: ${({lightBg}) => (lightBg ? '#F3EDE1' : '#F3EDE1')};  */}
    ${'' /* background: ${({lightBg}) => (lightBg ? '#F4F4F4' : '#F4F4F4')}; */}
    background: #fff;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 20px;
    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (max-width: 1024px){
        padding: 100px 0;
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
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 2rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: Bold 700;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#000' : '#000')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    font-family: 'Bellota Text', cursive;
    font-weight: 300;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1rem;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#666666' : '#111')};

`

export const TextWrapper = styled.div`
    padding: 10px;
    
    
`
