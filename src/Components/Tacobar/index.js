import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { TacobarContainer, Icon, 
  CloseIcon, TacobarWrapper, 
  TacobarMenu, TacobarLink, 
  TacoBtnWrap, TacobarRoute} from './TacobarElements';

const Tacobar = ({isOpen, toggle}) => {
  return <TacobarContainer isOpen={isOpen} onClick={toggle}>
    <Icon>
        <CloseIcon />
    </Icon>
    <TacobarWrapper>
        <TacobarMenu>
            <TacobarLink to="/" onClick={toggle} offset={-60}>Home</TacobarLink>
            <TacobarLink to="/menu" onClick={toggle} offset={-60}>Menu</TacobarLink>
            <TacobarLink to="/locations" onClick={toggle} offset={-60}>Locations</TacobarLink>
            <a href="https://www.instagram.com/aztecapanycakes/" target="_blank"><FaInstagram size='2rem'/></a>
            <a href="https://www.facebook.com/AztecaMexicanProductsBakery" target="_blank"><FaFacebook size='2rem'/></a>
            
        </TacobarMenu>
    </TacobarWrapper>
  </TacobarContainer>;
};

export default Tacobar;
