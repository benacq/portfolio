import React from 'react'
import timelineData from './Data';
import { TimelineSectionContainer, TimelineWrapper, TimelineSectionHeader } from './TimelineElements';
import TimelineItem from './TimelineItem';


const Timeline = () => 
     timelineData.length > 0 && (
         <TimelineSectionContainer>
         <TimelineSectionHeader>Experience and Achievements</TimelineSectionHeader>
            <TimelineWrapper>
                {timelineData.map((data, index) => (
                    <TimelineItem data={data} key={index}/>
                ))}
            </TimelineWrapper>
         </TimelineSectionContainer>

     
    );


export default Timeline
