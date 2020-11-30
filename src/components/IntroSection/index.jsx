import React from 'react'
import benacq from '../../images/benacq-2.jpg';
import {FaFacebook, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import { LandingPageSectionContainer, ImageBg, LandingPageSectionContent, LandingPageSectionH1, LandingPageSectionP, Socials, SocialsItem} from './IntroElements';
 
function IntroSection() {
    return (
        <>

 <LandingPageSectionContainer id="home">
            <div>
                <ImageBg src={benacq}/>
            </div>

            <LandingPageSectionContent>
                <LandingPageSectionH1>I'm Benjamin Acquaah</LandingPageSectionH1>
                <LandingPageSectionP>I am a software developer and data analyst based in Accra, Ghana. </LandingPageSectionP>
                <Socials>
                    <SocialsItem target="_blank" href='https://www.linkedin.com/in/benjamin-acquaah/'><FaLinkedin/></SocialsItem>
                    <SocialsItem target="_blank" href='https://github.com/benacq'><FaGithub/></SocialsItem>
                    <SocialsItem target="_blank" href='https://twitter.com/benacq44'><FaTwitter/></SocialsItem>
                    <SocialsItem target="_blank" href='https://web.facebook.com/benacqofficial/'><FaFacebook/></SocialsItem>
                </Socials>

            </LandingPageSectionContent>
          
        </LandingPageSectionContainer>            
        </>
    )
}

export default IntroSection


