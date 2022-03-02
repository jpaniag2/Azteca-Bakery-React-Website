import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;

    ${'' /* background: ${({lightBg}) => (lightBg ? '#F3EDE1' : '#F3EDE1')};  */}
    ${'' /* background: ${({lightBg}) => (lightBg ? '#F4F4F4' : '#F4F4F4')}; */}
    background: ${({lightBg}) => (lightBg ? '#D9F1F1' : '#D9F1F1')};
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 20px;

    @media screen and (max-width: 1024px){
        padding: 100px 0;
    }
    @media screen and (max-width: 1024px){
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0%;
        margin-right: 0%;
        border-radius: 0px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px;
    justify-content: center;

    @media screen and (max-width: 1024px){

        height: 100%;
    }
    @media screen and (max-width: 450px){

        height: 100%;
    }
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 1024px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 0px;
    margin-left:0;
    padding: 0px;
    grid-area: col1;
    background: transparent;

    @media screen and (max-width: 450px){
        margin-bottom: 50px;
        margin-top: -100px;
}
    
`
export const Column2 = styled.div`
    margin-bottom: 0;
    padding: 0 0px;
    grid-area: col2;
    
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 10px;
    padding-top: 25%;

    @media screen and (max-width: 1024px){
        max-width: 540px;
        padding: 10px;
        padding-top: 0%;
    }
    
`

export const TopLine = styled.p`
    color: #FDB3CA;
    font-family: 'Pacifico', cursive;
    font-weight: 300;
    font-size: 5rem;
    line-height: 90px;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 4rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: Bold 700;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#000' : '#000')};

    @media screen and (max-width: 480px){
        font-size: 4rem;
    }
`

export const Subtitle = styled.p`
    font-family: 'Bellota Text', cursive;
    font-weight: 300;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.5rem;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#666666' : '#111')};

`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-right: 50%;

    @media screen and (max-width: 450px){
        margin-left: 30%;
    }
`

export const ImgWrap = styled.div`
    
    @media screen and (max-width: 1024px){
        height: 600px;
    }
    @media screen and (max-width: 450px){
        height: 400px;
    }

`

export const Img = styled.img`
    width: 100%;
    height: 500px;
    margin: 0 0 0px 0;
    padding-right: 0;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    

    @media screen and (max-width: 1024px){
        width: 100%;
        padding-top: 40px;  
        object-fit: cover;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    @media screen and (max-width: 450px){
        height: 300px;
        padding-top: 0px;
        object-fit: cover;
        padding-top: 2px;

        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        
    }
`