import styled from 'styled-components';


export const GridDisplayContainer = styled.div`
    background-color: #1a2031;
    padding: '100px 20px 100px 20px';
    `

export const SectionHeader = styled.h1`
    font-size: 25px;
    color: #f00946;
    font-weight: lighter;
    margin-bottom: 20px;

    @media screen and (min-width: 300px) and (max-width: 567px){
       font-size: 18px;
    }

    @media screen and (min-width: 567px) and (max-width: 800px){
       font-size: 20px;
    }

    @media screen and (min-width: 567px) and (max-width: 800px){
       font-size: 20px; 
    }
    `

export const GridDataWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 30px;
    max-width: 960px;
    padding: 40px 50px;
    margin:auto;
    `

export const GridChild = styled.div`
    background-color: #1c2237;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 50px;
`
