import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import styled from 'styled-components'

const Style = styled.div`

       .card-img{
           height: 100%;
           width: 50%;
            object-fit: contain !important;

            @media screen and (max-width: 1400px){
              object-fit: cover;
        }
       }
`

const Divider = styled.div`
    padding-bottom: 6rem;
`

const SectionName = styled.div`
    color: ${({isCakeSection}) => (isCakeSection ? '#00211a' : '#00211a')};
    font-family: 'Old Standard TT', cursive;
    font-weight: 500;
    font-size: 9rem;
    line-height: 160px;
    text-align: center;
    padding: 3rem 0;

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

const SectionDivider = ({ title, img, isCakeSection }) => {
    return (


            <Style>
                <Row className="justify-content-md-center">
                    {/* <Col xl>
                        <Card.Img src={img}></Card.Img>
                    </Col> */}
                    <Col >

                        <SectionName isCakeSection={isCakeSection}>{title}</SectionName>

                    </Col>
                </Row>
            </Style>



    )
}

export default SectionDivider