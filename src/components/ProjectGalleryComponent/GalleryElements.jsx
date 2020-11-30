import styled from 'styled-components';


export const ProjectGalleryWrapper = styled.div`
  background-color: #1a2031;
  padding: 20px;
  margin: auto auto; 
  `

export const ProjectGalleryGrid = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  background-color: #1c2237;
  /* grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); */
  grid-template-columns: repeat(4, 1fr);

  @media screen and (min-width: 500px) and (max-width: 768px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 768px) and (max-width: 900px){
    grid-template-columns: repeat(3, 1fr);
    }

  @media screen and (min-width: 400px) and (max-width: 500px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 400px){
    grid-template-columns: repeat(1, 1fr);
  }

`

export const GalleryImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
`

export const GalleryGridChild = styled.div`
    height: 410px;


    @media screen and (min-width: 900px) and (max-width: 1100px){
      height: 370px;
    }

  @media screen and (min-width: 768px) and (max-width: 900px){
      height: 280px;
    }

  @media screen and (min-width: 500px) and (max-width: 768px){
    height: 230px;
  }

   @media screen and (min-width: 400px) and (max-width: 500px){
    height: 300px;
  }

  @media screen and (max-width: 400px){
    &.mobile{
      height: 440px;
    }
  }

`

export const ProjectGalleryHeaderMain  = styled.h1`
    flex-basis: 100%;
    margin-bottom: 100px;
    text-align: center;
    color: #eee;

    @media screen and (max-width: 768px){
       margin-bottom: 20px; 
    }


`