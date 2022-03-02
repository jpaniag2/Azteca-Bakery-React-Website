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
import Hero from '../Hero';
import Iframe from 'react-iframe';

const CakeMenu = () => {

    const navigate = useNavigate();

    AOS.init({ duration: 2000 });

    return (<>
        <ServicesContainer id="menu">
            {/* <ServicesH1>WHAT ARE WE CRAVING?</ServicesH1>
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
            </ServicesWrapper> */}
            <MenuIcon src={MenuItems} />
            <ServicesH2>REQUEST A MADE-TO-ORDER CAKE</ServicesH2>

            <ServicesP>
                Preorders are super limited—our schedule fills up on a first-come-first-served basis, and popular days can fill up weeks or months in advance.

                A preorder is not accepted until we confirm all details and full prepayment has been made.

                We can’t accept made-to-order preorders for same or next-day pickup, but you can order online from today’s selection of ready-made cakes for same-day pickup here.

                After submitting this form, we'll call you to confirm all the details and place your preorder. In the event your desired date isn’t available we’ll email you with other options.

            </ServicesP>
            <br></br>

            <ServicesH2>CAKE CARE</ServicesH2>
            <ServicesP>
We don't add preservatives to any of our goods. We recommend keeping our cakes refrigerated in their bakery box or an air-tight container for up to three days until thirty minutes to an hour before serving. Any leftovers should also be refrigerated in either an air-tight container or bakery box wrapped in cling film.

Condensation may form on a cake during refrigeration, depending on temperature and humidity; this is normal, will not adversely affect the cake, and will generally evaporate when left at room temperature for about thirty minutes to an hour.  
          </ServicesP>

          <br></br>
          <ServicesH2>
          GENDER REVEAL CAKES
          </ServicesH2>
          <ServicesP>
          We make gender reveal cakes too! Any of our designs can be made into a gender reveal cake with vanilla cake and pink or blue vanilla diplomat filling. 
          </ServicesP>

          <br></br>
          <ServicesH2>
          CAKE MODIFICATIONS/CANCELLATIONS
          </ServicesH2>
          <ServicesP>
          Cake preorders can generally be modified or canceled with at least 48 hours’ notice, with some changes requiring more notice. All modifications/cancellations must be done in writing in store.  
          </ServicesP>
        </ServicesContainer>
        
        <br></br>

        {/* <Iframe id='orderonline' src="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=891a1da3-ebc7-4059-ad4b-986021269a9d&client_is_mobile=true" width="1000" height="700" loading="lazy"></Iframe> */}

{/* 
        <Iframe id="cakemenu" src="https://docs.google.com/forms/d/e/1FAIpQLScu8TJON8StscecBAPXdOXokqSQ4TMnNdzYvPQ_URwcOj492g/viewform?embedded=true" width="800" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</Iframe> */}


    </>
    );
};

export default CakeMenu;