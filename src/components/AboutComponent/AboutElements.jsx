import styled from 'styled-components';


export const AboutContainer = styled.div`
    background-color: #1a2031;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    min-height: 100vh;   
    position: relative;
    padding: 20px 50px 10px 50px;
    z-index: 1;

@media screen and (max-width: 576px) { 
    flex-direction: column;
    padding: 15px 20px;
 }

@media screen and (max-width: 768px) and (min-width: 576px) { 
    flex-direction: column;
    padding: 15px 20px;
 }

 @media screen and (min-width: 768px) and (max-width: 815px) { 
    min-height: 840px !important;
 }

`

export const ImageBg= styled.img`
    height: 280px;
    width: 280px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #232A34;
    -o-object-fit: cover;
    object-fit: cover;

@media (max-width: 576px) { 
    height: 200px;
    width: 200px;
    position: static;
 }

 @media screen and (min-width: 576px) and (max-width: 768px) { 
    height: 250px;
    width: 250px;
    position: static;
 }

@media screen and (min-width: 768px) and (max-width: 815px) { 
    height: 260px;
    width: 260px;
    position: relative;
    top: -70px;
 }
` 

export const AboutContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 100%;


    @media screen and (min-width: 815px) { 
    position: relative;
    top: -30px;
 }
`

export const AboutH1= styled.h1`
    color: #f00946;
    font-size: 36px;
    font-weight: lighter;
    text-align: center;
    letter-spacing: 2px;

    @media (max-width: 576px) { 
        font-size: 26px;
    }

    @media screen and (min-width: 576px) and (max-width: 768px) { 
        font-size: 30px;
    }
`

export const AboutP= styled.p`
    color: #a0a0a0;
    font-size: 22px;
    margin: 24px;
    text-align: start;
    max-width: 100%;

    @media screen and (min-width: 576px) and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 576px) { 
        font-size: 16px;
        
    }
`

export const Socials = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    align-items: center;
    /* margin-right: -22px; */
`

export const SocialsItem= styled.li`
    display: flex;
    margin: 10px;
    /* background-color: grey; */
`
