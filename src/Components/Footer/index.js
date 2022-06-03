import React from 'react';
import { Container } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll/modules';
import Logo from '../../images/DarkGreenLogo.png'
import {
     FooterWrap,
    SocialLogo, WebsiteRights,
} from './FooterStyle';

const Footer = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (

        <Container fluid style={{ backgroundColor: '#fff' }}>
            <FooterWrap>
            <img
                            src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block"
                            alt="logo"
                            

                        />
                <SocialLogo to="/" onClick={toggleHome}>
                    Azteca Bakery © {new Date().getFullYear()}
                </SocialLogo>
                <WebsiteRights>Created by Crunchy Visions©</WebsiteRights>

            </FooterWrap>
        </Container>
    )
}

export default Footer;