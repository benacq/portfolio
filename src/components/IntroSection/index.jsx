import React from 'react'
import benacq from '../../images/benacq-2.jpg';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { LandingPageSectionContainer, ImageBg, LandingPageSectionContent, LandingPageSectionH1, LandingPageSectionP, Socials, SocialsItem } from './IntroElements';
import { motion } from 'framer-motion';

function IntroSection() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, backgroundColor:'#1c2237' }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>

                <LandingPageSectionContainer id="home">
                    <div>
                        <ImageBg src={benacq} />
                    </div>

                    <LandingPageSectionContent>
                        <LandingPageSectionH1>I'm Benjamin Acquaah</LandingPageSectionH1>
                        <LandingPageSectionP>I am a Software Engineer in Ghana, Accra. </LandingPageSectionP>
                        <Socials>
                            <SocialsItem target="_blank" href='https://www.linkedin.com/in/benjamin-acquaah/'><FaLinkedin /></SocialsItem>
                            <SocialsItem target="_blank" href='https://github.com/benacq'><FaGithub /></SocialsItem>
                            <SocialsItem target="_blank" href='https://twitter.com/benacq44'><FaTwitter /></SocialsItem>
                            <SocialsItem target="_blank" href='https://web.facebook.com/benacqofficial/'><FaFacebook /></SocialsItem>
                        </Socials>

                    </LandingPageSectionContent>

                </LandingPageSectionContainer>
            </motion.div>
        </>
    )
}

export default IntroSection


