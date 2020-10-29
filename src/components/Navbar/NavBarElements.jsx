import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
    background-color: ${({scrollNav}) => (scrollNav ? "#1a2031" : "transparent")};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
   
`


export const NavLogo = styled(LinkScroll)`
    color: #f00946;
    justify-self: start;
    display: flex;
    cursor: pointer;
    font-size: 1.5rem;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #eee;
    }
`


export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    align-items: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem= styled.li`
    display: flex;
    height: 80px;
    
`


export const NavLinks = styled(LinkScroll)`
    color: #f00946;
    display: flex;
    cursor: pointer;
    padding: 0 1rem;
    align-items: center;
    text-decoration: none;
    height: 100%;

    &.active{
        border-bottom: 3px solid #f00946;;
        
    }
`


// export const NavBtn = styled.nav`
//     display: flex;
//     align-items: center;

//     @media screen and (max-width: 768px){
//         display: none;
//     }
// `

// export const NavBtnLink = styled(LinkRouter)`
//     border-radius: 50px;
//     background: #01bf71;
//     white-space: nowrap;
//     padding: 10px 22px;
//     color: #010606;
//     outline: none;
//     font-size:16px;
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//     text-decoration: none;

//     &:hover{
//         color: #010606;
//         background: #fff;
//         transition: all 0.2s ease-in-out;
//     }
// `