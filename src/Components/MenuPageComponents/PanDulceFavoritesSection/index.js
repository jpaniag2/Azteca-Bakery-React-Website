import React from 'react'
import PanDulceFavoritesCard from '../PanDulceFavoritesCard'
import { Container } from 'react-bootstrap'
import { Style } from './PanDulceFavoritesSectionStyle'
import styled from 'styled-components'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { ConchaCard, OrejaCard, CuernitoCard, PolvoronCard, MantecadaCard, DonasCard } from '../PanDulceFavoritesCard/FavoritesData'

const favorites = [ConchaCard, OrejaCard, CuernitoCard, PolvoronCard, MantecadaCard, DonasCard]

const Divider = styled.div`
    padding-bottom: 3rem;
`

const SectionName = styled.div`
    color: #00211a;
    font-family: 'Old Standard TT', cursive;
    font-weight: 700;
    font-size: 4rem;
    line-height: 60px;
    text-align: center;
    padding-top: 3rem;

    @media screen and (max-width: 480px){
        font-size: 2rem;
        line-height: 40px;
    }
`

const Description = styled.div`

    padding: 1rem;
    font-size: 1.3rem;
    font-family: 'Khula', cursive;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    width: 80%;
    margin-left: 10%;
    color: #00211a;

    ${'' /* @media screen and (max-width: 2350px){
        font-size: 1.3vw;
    } */}
    @media screen and (max-width: 480px){
        font-size: 2rem;
        line-height: 2;
        width: 100%;
        margin-left: 0%;
    }
    @media screen and (max-width: 480px){
        font-size: .9rem;
        line-height: 1.5;
    }

`

const ViewMore = styled.a`

    font-size: 1.5rem;
    font-family: 'Khula', cursive;
    font-weight: 600;
    line-height: 2;
    position: center;
    margin: auto;
    color: #00211a;

    ${'' /* @media screen and (max-width: 2350px){
        font-size: 1.3vw;
    } */}
    @media screen and (max-width: 480px){
        font-size: 2rem;
        line-height: 2;
    }
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }

`

const PanDulceFavoritesSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        adaptiveHeight: true,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    return (
        <Container fluid='xxl'>

            <SectionName>Bakery Favorites</SectionName>
            <Description> The irresistable favorites over the years. 
                <br></br>
                <br></br>
                {/* <ViewMore href='/'>Full List</ViewMore> */}
            </Description>
            <Style>
                <Slider {...settings}>
                    {favorites.map((products) => (
                        <PanDulceFavoritesCard {...products} />
                    ))}


                </Slider>
            </Style>
            <Divider></Divider>

        </Container>
    )
}

export default PanDulceFavoritesSection