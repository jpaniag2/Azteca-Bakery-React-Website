import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';
import { FooterContainer, FooterWrap, 
    FooterLinksContainer, FooterLinksWrapper, 
    FooterLinkItems, FooterLinkTitle, 
    FooterLink, SocialMedia, SocialMediaWrap, 
    SocialLogo, SocialLogo2, WebsiteRights, SocialIcons, 
    SocialIconLink } from './FooterStyle';

const Footer = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
      
    <FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/PlaceOrder">Terms of Service</FooterLink>
                        <FooterLink to="/PlaceOrder"> Careers</FooterLink>
                        <FooterLink to="/PlaceOrder">Location</FooterLink>
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Socials</FooterLinkTitle>
                        <FooterLink to="/PlaceOrder">Facebook</FooterLink>
                        <FooterLink to="/PlaceOrder">Instagram</FooterLink>
                        <FooterLink to="/PlaceOrder">TikTok</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
            <SocialMediaWrap>
            <SocialIcons>

<SocialIconLink href="/" target="_blank" aria-label="Facebook">
    <FaFacebook />
</SocialIconLink>

<SocialIconLink href="/" target="_blank" aria-label="Instagram">
    <FaInstagram />
</SocialIconLink>

</SocialIcons>
                <SocialLogo to="/" onClick={toggleHome}>
                    azteca bakery © {new Date().getFullYear()}
                </SocialLogo>
                <WebsiteRights> Made with ❤️ by ©CrunchyVision</WebsiteRights>

            </SocialMediaWrap>
            
        </SocialMedia>

    </FooterWrap>
</FooterContainer>
  )
}

export default Footer;