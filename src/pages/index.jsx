import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/Navbar'
import AboutSection from '../components/AboutComponent';
import IntroSection from '../components/IntroSection';
import Timeline from '../components/TimeLine/Timeline';
import Skills from '../components/SkillsComponent';
import Grid from '../components/ServicesGridComponent';
import ProjectGallery from '../components/ProjectGalleryComponent';


const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = ()=>{
    setIsOpen(!isOpen);
}
    return (
        <>
            <SideBar isOpen = {isOpen} toggle = {toggle}/>
            <NavBar toggle={toggle}/>
            <IntroSection/>
            <AboutSection/>
            <Skills/>
            <Grid/>  
            <Timeline/>
            <ProjectGallery/>
            
           
        </>
    )
}

export default Home
