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
                    <SideBarLink to='home' onClick={toggle}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    exact="true">Home</SideBarLink>

                    <SideBarLink to='about' onClick={toggle}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    exact="true">About</SideBarLink>

                    <SideBarLink to='skills' onClick={toggle}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    exact="true">Skills</SideBarLink>

                    <SideBarLink to='services' onClick={toggle}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    exact="true">Services</SideBarLink>

                    <SideBarLink to='experience' onClick={toggle}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    exact="true">Experience</SideBarLink>

                    <SideBarLink to='projects' onClick={toggle}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    exact="true">Projects Gallery</SideBarLink>
                </SideBarMenu>
                 
            </SideBarWrapper>
        </SideBarContainer>
    );
}

export default SideBar;
