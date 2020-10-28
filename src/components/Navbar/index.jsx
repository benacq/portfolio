import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu} from './NavBarElements';

 function NavBar({toggle}) {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>benacq</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='home'
                        smooth={true}
                        duration={500}
                        offset={-80}
                        spy={true}
                        exact="true">Home</NavLinks>

                        <NavLinks to='about'
                         smooth={true}
                         duration={500}
                         offset={-80}
                         spy={true}
                         exact="true">About</NavLinks>


                        <NavLinks to='skills'
                         smooth={true}
                         duration={500}
                         offset={-80}
                         spy={true}
                         exact="true">Skills</NavLinks>


                        <NavLinks to='services'
                         smooth={true}
                         duration={500}
                         offset={-80}
                         spy={true}
                         exact="true">Services</NavLinks>

                        <NavLinks to='experience'
                         smooth={true}
                         duration={500}
                         offset={-80}
                         spy={true}
                         exact="true">Experience</NavLinks>

                        <NavLinks to='projects'
                         smooth={true}
                         duration={500}
                         offset={-80}
                         spy={true}
                         exact="true">Projects Gallery</NavLinks>
                    </NavItem>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink>
                        Sign In
                    </NavBtnLink>        
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
    </>
  );
}

export default NavBar;