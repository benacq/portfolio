import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
// import {Link as LinkRouter} from 'react-router-dom';



export const LandingPageSectionContainer = styled.div`
    background-color: #1c2237;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const ImageBg= styled.img`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #232A34;
    -o-object-fit: cover;
    object-fit: cover;
` 

export const LandingPageSectionContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 8px 8px;
    max-width: 100vh;
    margin-left: 40px;    
`

export const LandingPageSectionH1= styled.h1`
    color: #f00946;
    font-size: 36px;
    align-self: flex-start;

    @media screen and (max-width: 768px){
        font-size: 30px;
        align-self: center;
    }
    @media screen and (max-width: 480px){
        font-size: 22px;
    }
`

export const LandingPageSectionP= styled.p`
    color: #ddd;
    font-size: 25px;
    text-align: start;
    padding: 10px 0px 0px 0px;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const Socials = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    align-items: center;
    margin-top: 40px;
`

export const SocialsItem= styled.a`
    display: flex;
    margin: 10px;
    color: #666;
    font-size: 25px;

       &:hover{
        color: cornflowerblue;
        transition: all 0.2s ease-in-out;
    }
`

export const PortfolioBtn = styled.nav`
    display: flex;
    align-items: center;
`

export const PortfolioBtnLink = styled(LinkScroll)`
    border-radius: 50px;
    background: cornflowerblue;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    font-size:16px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: #010606;
        background: #fff;
        transition: all 0.2s ease-in-out;
    }
`