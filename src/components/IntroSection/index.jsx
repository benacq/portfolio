import React from 'react'
import benacq from '../../images/benacq-2.jpg';
import {FaFacebook, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import { LandingPageSectionContainer, ImageBg, LandingPageSectionContent, LandingPageSectionH1, LandingPageSectionP, Socials, SocialsItem} from './IntroElements';
 
function InfoSection() {
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
                    <SocialsItem to='LandingPageSection'><FaFacebook/></SocialsItem>
                    <SocialsItem to='LandingPageSection'><FaTwitter/></SocialsItem>
                    <SocialsItem to='LandingPageSection'><FaGithub/></SocialsItem>
                    <SocialsItem to='LandingPageSection'><FaLinkedin/></SocialsItem>
                </Socials>

            </LandingPageSectionContent>
          
        </LandingPageSectionContainer>


            
        </>
    )
}

export default InfoSection


