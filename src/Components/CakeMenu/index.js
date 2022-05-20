import React from 'react';
import Icon1 from '../../images/TresLechesCake.png'
import Icon2 from '../../images/Concha.png'
import MenuItems from '../../images/CakeMenu1.png'
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


            <MenuIcon src={MenuItems} />


            <ServicesH2>
                TERMS AND CONDITIONS.
            </ServicesH2>
            <ServicesP>

            Order regular cakes with at least a day’s notice (round cakes need two days notice).
            <br></br>
            <br></br>
            To better serve our clients, for events such as weddings, quinces ,parties bigger than 100 people, we request that the client come and order no later than a month before the event. 
            <br></br>
            <br></br>
            Please bring your copy of the receipt that is given to you the day you order the cake.
            <br></br>
            <br></br>
            For large sized cakes, a base is used and a deposit is required. Once you return the base, the deposit is returned.
            <br></br>
            <br></br>
            DEPOSIT IS REQUIRED THE DAY OF THE ORDER. When the client comes to pick up the cake the rest of the balance is to be paid in full.
            <br></br>
            <br></br>
            All products are the responsibility of the customer once it leaves our store. We are not responsible for any damages that occur after the cake is picked up. Please keep in mind that cakes are fragile and should be handled with care.
            <br></br>
            <br></br>
            WE DO NOT ISSUE REFUNDS IF THE CAKE HAS BEEN DAMAGED OR EATEN OR IF IT IS A CUSTOM ORDER.
            <br></br>
            <br></br>
            Client can provide a photograph, we make no claims that it will be an exact duplicate of the photo.

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