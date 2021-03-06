import styled from 'styled-components'

export const LocationContainer = styled.div`
    ${'' /* background-image: ${`url(${NavPicture})`};
    background-size: cover; */}
    background-color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
    align-items: center;
    border-radius: 30px;
    box-shadow: 3px 3px 3px #000;


    @media screen and (max-width: 1024px){
        height: 100%;
    }

    @media screen and (max-width: 480px){
        height: 100%;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    grid-gap: 8px;
    padding: 0 50px;

    @media screen and (max-width: 1124px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 450px){
        grid-template-columns: 1fr;
        padding: 0 0px;
    }
`

export const ServicesCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    align-items: center;
    border-radius: 10px;
    height: 100%;
    ${'' /* max-height: 600px;
    min-height: 340px; */}
    padding: 30px;
    ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out; */}

    ${'' /* &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
    } */}

    @media screen and (max-width: 480px){
        height: 300px;
        padding: 0px;
    }

`

export const ServicesIcon = styled.img`
    height: 400px;
    width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
    border: 1px solid;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.3);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
    }

    @media screen and (max-width: 480px){
        height: 300px;
        width: 300px;
    }

`

export const ServicesH1 = styled.h1`
    margin-top: 0px;
    font-size: 2rem;
    font-family: 'Bellota Text', cursive;
    font-weight: 400;
    color: #2D2F2F;
    text-decoration: none;
    margin-bottom: 10px;
    opacity: 0.9;
    line-height: 1.1;
    ${'' /* font-family: 'Playfair Display', serif;
    font-weight: 400; */}

    @media screen and (max-width: 480px){
        ${'' /* display:none; */}
        font-size: 2.5rem;
        text-align: center;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: Bold 700;
    text-align: center;

    @media screen and (max-width: 1024px){
        font-size: 1.1rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1.1rem;
    }
`

export const ServicesP = styled.p`
    font-size: 1rem;
    font-family: 'Bellota Text', cursive;
    font-weight: 300;
    text-align: center;

    @media screen and (max-width: 1024px){
        font-size: .8rem;
    }

    @media screen and (max-width: 480px){
        font-size: .95rem;
    }
`

export const BtnWrap = styled.a`
    display: center;
    justify-content: flex-start;
    text-decoration: none;
`
export const Introduction = styled.p`
    margin-bottom: 24px;
    text-align: center;
    font-size: 4rem;
    font-family: 'Bellota Text', cursive;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#fff')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const TopLine = styled.p`
    color: #ce202a;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;
    text-align: center;
`