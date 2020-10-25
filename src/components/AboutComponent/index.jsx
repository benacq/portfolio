import React from 'react'
import {AboutContainer, ImageBg, AboutContent, AboutH1, AboutP} from './AboutElements'
import benacq from '../../images/me2.jpg';

const AboutSection = () => {
    return (
        <AboutContainer id="home" className="about-container">
            <div>
                <ImageBg src={benacq}/>
            </div>
            <AboutContent>
                <AboutH1>ABOUT ME</AboutH1>
                <AboutP>
                    My name is Benjamin Acquaah i am a result driven software developer and data analyst based in Accra, Ghana, I have deep passion for tech and invention and also a Computer Science student at Kwame Nkrumah University of Science and Technology.
                    I am a fast learner and a team player, i find clear communication very important and efficient, I mostly work on backend because of my deep understanding in database concepts and applications and also i love to tease my brain with some logic.
                    Get in touch and get to know more about me :)
                </AboutP>
            </AboutContent>


 
          
        </AboutContainer>
    )
}

export default AboutSection
