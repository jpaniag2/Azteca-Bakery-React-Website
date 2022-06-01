import React from 'react'
import CakeSection from '../MenuPageComponents/CakeSection'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import SectionDivider from '../MenuPageComponents/SectionDivider'
import { CakeSectionStart } from '../MenuPageComponents/SectionDivider/Data'

const Divider = styled.div`
    padding-bottom: 4rem;

    @media screen and (max-width: 480px){
        padding-bottom: 1.5rem;
    }
`

const SectionName = styled.div`
    color: #00211a;
    font-family: 'Old Standard TT', cursive;
    font-weight: 700;
    font-size: 8rem;
    line-height: 60px;
    text-align: center;
    padding-top: 5rem;

    @media screen and (max-width: 480px){
        font-size: 3.5rem;
    }
`

const CakePage = () => {
    return (
        <>
            <Divider></Divider>
            <Container fluid style={{ backgroundColor: '#bae8d4' }}>
                <SectionDivider {...CakeSectionStart} />
            </Container>

            <CakeSection />
        </>

    )
}

export default CakePage