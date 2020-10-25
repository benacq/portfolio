import React from 'react';
import { CloseIcon, Icon, SideBarContainer, SideBarMenu, SideBarLink, SideBarWrapper } from './SideBarElement';
  
const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='home' onClick={toggle}>Home</SideBarLink>
                    <SideBarLink to='home' onClick={toggle}>About</SideBarLink>
                    <SideBarLink to='home' onClick={toggle}>Experience</SideBarLink>
                    <SideBarLink to='home' onClick={toggle}>Services</SideBarLink>
                </SideBarMenu>
                 
            </SideBarWrapper>
        </SideBarContainer>
    );
}

export default SideBar;
