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

            </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
            <SocialMediaWrap>
            <SocialIcons>
{/* 
<SocialIconLink href="/" target="_blank" aria-label="Facebook">
    <FaFacebook />
</SocialIconLink>

<SocialIconLink href="/" target="_blank" aria-label="Instagram">
    <FaInstagram />
</SocialIconLink> */}

</SocialIcons>
                <SocialLogo to="/" onClick={toggleHome}>
                    azteca bakery © {new Date().getFullYear()}
                </SocialLogo>
                <WebsiteRights> Made by CrunchyVision©</WebsiteRights>

            </SocialMediaWrap>
            
        </SocialMedia>

    </FooterWrap>
</FooterContainer>
  )
}

export default Footer;