import React from 'react';
import Icon1 from '../../images/TresLechesCake.png'
import Icon2 from '../../images/Concha.png'
import MenuItems from '../../images/CakeMenu.png'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'


import {
    ServicesContainer,
    ServicesH1, ServicesWrapper,
    ServicesCard, ServicesIcon,
    ServicesH2, ServicesP,
    MenuIcon
} from './CakeMenuStyle';

const CakeMenu = () => {

    const navigate = useNavigate();

    AOS.init({ duration: 2000 });

    return (<>
        <ServicesContainer id="menu">
            <ServicesH1>WHAT ARE WE CRAVING?</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Tres Leches Cakes</ServicesH2>
                    <ServicesP>Pre-Made & Customization Available</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Mexican bread & pastries</ServicesH2>
                    <ServicesP> Freshly made everyday</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Tres Leches Cakes</ServicesH2>
                    <ServicesP>Pre-Made & Customization Available</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

            <MenuIcon src={MenuItems} />

        </ServicesContainer>

    </>
    );
};

export default CakeMenu;