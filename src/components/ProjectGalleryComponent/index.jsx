import React from 'react';
import { ProjectGalleryGrid, GalleryGridChild, ProjectGalleryWrapper, GalleryImage, ProjectGalleryHeaderMain } from './GalleryElements';
import covid_satellite1 from '../../images/corona5.jpg';
import covid_satellite2 from '../../images/corona4.jpg';
import attrition_time_spend from '../../images/time_spend_emp_status.png';
import corr_matrix from '../../images/corr_matrix.png';
import timelydeals from '../../images/timelydeals.png';

const index = () => {
    return (
        <ProjectGalleryWrapper id="projects">
            <ProjectGalleryHeaderMain>Projects Gallery</ProjectGalleryHeaderMain>
            <ProjectGalleryGrid class="container">
            <GalleryGridChild data-lightbox="homePortfolio" className="mobile">
                <GalleryImage alt="Loading Failed" src={covid_satellite1}/>
            </GalleryGridChild>
            
            <GalleryGridChild data-lightbox="homePortfolio">
                <GalleryImage alt="Loading Failed" src={attrition_time_spend}/>
            </GalleryGridChild>
            
            <GalleryGridChild data-lightbox="homePortfolio">
                <GalleryImage alt="Loading Failed" src={corr_matrix}/>
            </GalleryGridChild>
            
            <GalleryGridChild data-lightbox="homePortfolio" className="mobile">
                <GalleryImage alt="Loading Failed" src={timelydeals}/>
            </GalleryGridChild>

            <GalleryGridChild data-lightbox="homePortfolio" className="mobile">
                <GalleryImage alt="Loading Failed" src={timelydeals}/>
            </GalleryGridChild>

            <GalleryGridChild data-lightbox="homePortfolio" className="mobile">
                <GalleryImage alt="Loading Failed" src={covid_satellite2}/>
            </GalleryGridChild>
            
            </ProjectGalleryGrid>

    </ProjectGalleryWrapper>
    );
}

export default index;