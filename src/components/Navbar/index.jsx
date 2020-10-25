import React from 'react';
import {FaBars} from 'react-icons/fa';
import {MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu} from './NavBarElements';

 function NavBar({toggle}) {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>benacq</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>Home</NavLinks>
                        <NavLinks to='about'>About</NavLinks>
                        <NavLinks to='about'>Experience</NavLinks>
                        <NavLinks to='about'>Services</NavLinks>
                        <NavLinks to='about'>Projects Demo</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink>
                        Sign In
                    </NavBtnLink>        
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
}

export default NavBar;