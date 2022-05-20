import styled from 'styled-components'
// import ToDo1 from '../../images/ToDo1.svg'

export const Style = styled.div`

    .container{
        margin-top: 80px;
        border-radius: 30px;
    }

`


export const InfoContainer = styled.div`
    color: #fff;
    ${'' /* background: #1D1D1D; */}
    ${'' /* background: #e4e4e4; */}
    
    padding: 2rem 1rem;
    overflow: hidden;

    ${'' /* background-image: ${`url(${ToDo1})`};
    background-repeat: no-repeat;
    background-position: bottom right;
    background-attachment: fixed;
    background-size: 25%; */}

    @media screen and (max-width: 1024px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    
    z-index: 1;
    height: 100%;
    width: 100%;
    height: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 10px;
    justify-content: center;

    @media screen and (max-width: 1024px){
        height: 800px;
 }
 @media screen and (max-width: 450px){
        height: 100%;
 }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: topLine;
    grid-template-areas: 'col1';

    @media screen and (max-width: 1024px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 0px;
    padding: 0rem 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 700px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const HeadingWrapper = styled.div`
    max-width: 540px;
    padding-left: 20px;
    padding-bottom: 0px;
    text-align: right;
`

export const Introduction = styled.p`
    margin-bottom: 10%;
    font-size: 4rem;
    font-family: 'Pacifico', cursive;
    line-height: 1.1;
    font-weight: 700;
    text-align: center;
    color: ${({lightText}) => (lightText ? '#111' : '#FDB3CA')};

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const TopLine = styled.p`
    color: #000;
    font-size: 1.3rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;
    padding-left: 0;
    text-align: center;


    @media screen and (max-width: 480px){
        padding-left: 0rem;
        font-size: 1rem;
    }
`

export const TechnologyItem = styled.li`
    list-style: none;
    text-align: ;
    height: 90px;

`

export const Subtitle = styled.p`
    color: #1D1D1D;
    ${'' /* font-family: 'Bellota Text', cursive; */}
    font-family: 'Bellota text', cursive;
    font-size: 2.2rem;
    line-height: 40px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: none;
    margin-bottom: 16px;
    text-align: left;

    @media screen and (max-width: 1024px){
        text-align: left;
        font-size: 2rem;
    }

    @media screen and (max-width: 480px){
        text-align: center;
        font-size: 1.2rem;
    }

`

export const Img = styled.img`
    width: 100%;
    height: 700px;
    object-fit: contain;
    border-radius: 0px;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 1024px){
        height: 450px;
        padding-top: 40px;
        border-radius: 0;
        object-fit: contain;
    }
    @media screen and (max-width: 450px){
        padding-top: 0px;
        object-fit: contain;
        border-radius: 0;
        padding-top: 10px;
        
    }
`