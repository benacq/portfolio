import React from 'react'
import { TimelineItemContainer, TimelineDetailText, TimelineOrganizationName, TimelineItemContent, TimelineCircleDots, TimelineStatusSpan, TimelineDate } from './TimelineElements';
import {MdDateRange} from 'react-icons/md'

const TimelineItem = ({data}) =>
     (
        <TimelineItemContainer>
            <TimelineItemContent className='timeline-item-content'>
                <TimelineStatusSpan className='tag' style={{background: data.category.color}}>
                {data.category.status}
                </TimelineStatusSpan>
                <TimelineOrganizationName>{data.organization.name}</TimelineOrganizationName>
                <span><MdDateRange/> <TimelineDate>{data.date.start}</TimelineDate> - <TimelineDate>{data.date.end}</TimelineDate></span>
                {/* <span>end : </span> */}

                <span><TimelineDetailText>{data.text}</TimelineDetailText></span>

                { data.link && (
                    <a href={data.link.url} target='_blank' rel="noopener noreferrer">{data.link.text}</a>
                )}
                <TimelineCircleDots className="circle"/>
            </TimelineItemContent>
        </TimelineItemContainer>
    )

export default TimelineItem;