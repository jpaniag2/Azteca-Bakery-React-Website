import React from 'react'
import { Container, CardGroup } from 'react-bootstrap'
import ProductsHomeCard from '../ProductsHomeCard';
import styled from 'styled-components';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Style } from './ProductsHomeStyle';


import {CustomCakeCard, PreMadeCakesCard, BreadCard, PanDulceCard, PastriesCard, SeasonalCard } from '../ProductsHomeCard/Data'

const productItems = [CustomCakeCard, PreMadeCakesCard, PanDulceCard, PastriesCard, BreadCard, SeasonalCard];

const Divider = styled.div`
    padding-bottom: 6rem;
`

const SectionName = styled.div`
    color: #00211a;
    font-family: 'Old Standard TT', cursive;
    font-weight: 700;
    font-size: 4rem;
    line-height: 60px;
    text-align: center;
    padding-top: 5rem;

    @media screen and (max-width: 480px){
        font-size: 2rem;
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
        font-size: 1rem;
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


const ProductsHomeSection = () => {

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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Container fluid='xxl'>
      <Divider></Divider>
      <SectionName>Our Products</SectionName>
      <Description>For {new Date().getFullYear() - 2001} years we have worked hard to provide fresh, traditional, and authentic Mexican pan dulce and Tres Leches cakes daily for our customers. 
      <br></br> 
      <br></br>  
      <ViewMore href='/menu'>View Menu</ViewMore></Description>
      <Style>
        <Slider {...settings}>
          {productItems.map((products) => (
            <ProductsHomeCard {...products} />
          ))}


        </Slider>
      </Style>
      <Divider></Divider>

    </Container>

  )
}

export default ProductsHomeSection