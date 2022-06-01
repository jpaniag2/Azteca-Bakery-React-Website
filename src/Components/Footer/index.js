import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';
import Logo from '../../images/DarkGreenLogo.png'
import {
    FooterContainer, FooterWrap,
    FooterLinksContainer, FooterLinksWrapper,
    FooterLinkItems, FooterLinkTitle,
    FooterLink, SocialMedia, SocialMediaWrap,
    SocialLogo, SocialLogo2, WebsiteRights, SocialIcons,
    SocialIconLink
} from './FooterStyle';

const Footer = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (

        <Container fluid style={{ backgroundColor: '#bae8d4' }}>
            <FooterWrap>
            <img
                            src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block"
                            alt="logo"
                            style={{margin: '4rem 0'}}

                        />
                <SocialLogo to="/" onClick={toggleHome}>
                    Azteca Bakery © {new Date().getFullYear()}
                </SocialLogo>
                <WebsiteRights> Made by Julio Paniagua©</WebsiteRights>

            </FooterWrap>
        </Container>
    )
}

export default Footer;