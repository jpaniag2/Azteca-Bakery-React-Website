import styled from 'styled-components'

export const BakeryCardStyle = styled.div`
    .card{
        border: none;
        color: "#000";
        background-color: #000;
        margin: 10px 0;
        border-radius: 10px;


        
        @media screen and (max-width: 450px){
            margin: 2% 5%;
        }
        
    }

    .card-img{
        object-fit: cover;
        object-position: center;
        height: 25rem;
        border-radius: 10px;
        box-shadow: 2px 2px 2px #000;
        opacity: 0.5;

        @media screen and (max-width: 1024px){
           height: 15rem;
        }
    }

    .card-title{
        display: none;
    }

    .card:hover .card-title{
        
        color: #fff;
        font-family: 'Bellota Text', cursive;
        font-weight: 400;
        font-size: 2.2rem;
        
    }

    .card-body{

        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        color: #FDB3CA;
        font-family: 'Bellota Text', cursive;
        font-weight: 600;
        font-size: 3rem;
        text-align: left;
        padding-left: 2rem;

        @media screen and (max-width: 1024px){
           font-size: 1.2rem;
        }
    }

    .card:hover .card-body{
        display: none;
    }

    .card:hover .card-img {
    transform: scale(1.001);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: 1;
    }

    .button{
        border-radius: 0px;
        margin-bottom: -50px;
    }
`
export const ServicesIcon = styled.img`
    height: 400px;
    object-fit: cover;

    transition: all 0.2s ease-in-out;

    &:hover {
        color: red;
        transform: scale(1.0);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
    }

    @media screen and (max-width: 1024px){
        height: 300px;
        width: 400px;
    }

    @media screen and (max-width: 450px){
        height: 400px;
        width: 150px;
        margin-bottom: 0px;
    }

`