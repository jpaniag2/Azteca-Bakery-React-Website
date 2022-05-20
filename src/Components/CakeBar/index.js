import React from 'react';
import { CakebarContainer, Icon, 
  CloseIcon, CakebarWrapper, 
  CakebarMenu, CakebarLink, 
  CakeBtnWrap, CakebarRoute} from './CakebarElements';

const Cakebar = ({isOpen, toggle}) => {
  return <CakebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon>
        <CloseIcon />
    </Icon>
    <CakebarWrapper>
        <CakebarMenu>
            <CakebarLink to="menu" onClick={toggle} offset={-60}>Menu</CakebarLink>
            <CakebarLink to="services" onClick={toggle} offset={-60}>Services</CakebarLink>
            <CakebarLink to="about" onClick={toggle} offset={-60}>About</CakebarLink>
            
        </CakebarMenu>
    </CakebarWrapper>
  </CakebarContainer>;
};

export default Cakebar;
