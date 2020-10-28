import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';


export const SideBarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background-color: #121624;
align-self: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
/* opacity: ${({isOpen}) => (isOpen ? '100%':'0')}; */
display: ${({isOpen}) => (isOpen ? 'grid':'none')};
top: ${({isOpen}) => (isOpen ? '0':'-10%0')};


@media screen and (min-width: 768px){
    display: none;
}
`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background-color: transparent;
cursor: pointer;
outline: none;  
font-size: 2rem;
`
export const SideBarWrapper = styled.div`
color: #fff;
`

export const SideBarMenu= styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`

export const SideBarLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover{
    color: #f00946;
    transition: 0.2s ease-in-out;
}
`



