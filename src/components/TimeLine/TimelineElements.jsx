import styled from 'styled-components';


export const TimelineSectionContainer = styled.div`
  background-color: #1c2237;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	font-family: 'Lato', sans-serif;
	margin: 0;
`

export const TimelineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    position: relative;
    /* background-color: pink; */
    min-width: 70%;
    padding: 0 20px;


/* Timeline divider line */
  &:after {
    background-color: #444;
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    left: calc(50% - 2px);
  }

  @media screen and (max-width: 800px){
      width: 100%;
  }

  @media screen and (max-width: 600px){
      width: 100%;

        &:after {
        background-color: #444;
        content: '';
        position: absolute;
        width: 4px;
        height: 100%;
        left: calc(3.5% - 2px);
    }
  }

`

export const TimelineItemContainer = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 10px;
margin: 5px 0;
width: 50%;
/* background-color: brown; */

&:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 10px;
    padding-right: 0;
}

&:nth-child(odd) .timeline-item-content .circle{
    right: auto;
    left: -20px;
}
  @media screen and (max-width: 600px){
    width: 100%;
    align-self: flex-start;
    justify-content: flex-start;
    padding: 0 !important;
      .circle{
          left: -16px !important;
      }
  }


`

export const TimelineItemContent = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    background-color: #222940;
    color: #acacac !important;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px 15px 10px 15px;
    position: relative;
    width: 80%;
    text-align: right;

    &:nth-child(odd) {
    align-items: flex-start;
    text-align: left;


    @media screen and (max-width: 992px){
    width: 100%;
  }
}

`


export const TimelineCircleDots = styled.span`
    background-color: #fff;
    border: 3px solid #e17b77;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -20px;
    width: 20px;
    height: 20px;
    z-index: 1;

`

export const TimelineOrganizationName = styled.h1`
    font-weight: normal;
    font-size: 25px;
    color: #d1d1d1;
`

export const TimelineStatusSpan = styled.span`
    padding: 3px 5px;
    color: #ddd;
    -moz-box-shadow: inset 0 0 10px rgba(0,0,0,0.6);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.4);
    box-shadow: inset 0 0 10px rgba(0,0,0,0.4);
    margin-bottom: 5px;
`

    export const TimelineDate = styled.span`
    font-size: 13px;
    position: relative;
    top: -2px;
    letter-spacing: 2px;
    `

    export const TimelineDetailText = styled.p`
    margin-top: 15px;
    display: inline-block;
    font-size: 15px;
    color: #999;
    /* font-weight: bold; */
    letter-spacing: 2px;
    `


    export const TimelineSectionHeader = styled.h1`
    font-size: 1.8em;
    font-weight: normal;
    margin-top: 10px;
    color: #d4d4d4;

    @media screen and (max-width: 500px){
      font-size: 1.4em;
    }
    `


