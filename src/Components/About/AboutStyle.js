import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;

    ${'' /* background: ${({lightBg}) => (lightBg ? '#F3EDE1' : '#F3EDE1')};  */}
    ${'' /* background: ${({lightBg}) => (lightBg ? '#F4F4F4' : '#F4F4F4')}; */}
    background: ${({lightBg}) => (lightBg ? '#fff' : '#fff')};
    margin-top: 10px;

    @media screen and (max-width: 1024px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 530px;
    width: 100%;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;
    justify-content: center;

    @media screen and (max-width: 1024px){
        height: 750px;
    }
    @media screen and (max-width: 450px){
        height: 550px;
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
    margin-bottom: 15px;
    margin-left: 10%;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #666666;
    font-family: 'Bellota Text', cursive;
    font-weight: 300;
    font-size: 2rem;
    line-height: 30px;
    margin-bottom: 16px;
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

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-right: 50%;

    @media screen and (max-width: 450px){
        margin-left: 30%;
    }
`

export const ImgWrap = styled.div`
    max-width: 100%;
    height: 450px;
    

    @media screen and (max-width: 1024px){
        height: 600px;
    }
    @media screen and (max-width: 450px){
        height: 400px;
    }

`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    object-fit: contain;
    

    @media screen and (max-width: 1024px){
        height: 450px;
        padding-top: 40px;  
        object-fit: cover;
    }
    @media screen and (max-width: 450px){
        height: 300px;
        padding-top: 0px;
        object-fit: cover;
        padding-top: 2px;
        
    }
`