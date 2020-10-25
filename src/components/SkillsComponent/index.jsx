import React from 'react'
import { SkillsContainer, SkillSectionData, SkillSectionDataList, SkillSectionHeader, SkillHeaderMain} from './SkillsElement';

function Skills() {
    return (
        <div>
        
         <SkillsContainer id="home">
         <SkillHeaderMain>SKILLS</SkillHeaderMain>
            <div>
                <SkillSectionHeader>Language</SkillSectionHeader>
                <SkillSectionData>
                    <SkillSectionDataList>English</SkillSectionDataList>
                </SkillSectionData>
            </div>

            <div>
                <SkillSectionHeader>Programming Languages</SkillSectionHeader>
                <SkillSectionData>
                    <SkillSectionDataList>Dart</SkillSectionDataList>
                    <SkillSectionDataList>Javascript</SkillSectionDataList>
                    <SkillSectionDataList>Python</SkillSectionDataList>
                    <SkillSectionDataList>PHP</SkillSectionDataList>
                    <SkillSectionDataList>SQL</SkillSectionDataList>
                </SkillSectionData>
            </div>
            <div>
                 <SkillSectionHeader>Technologies</SkillSectionHeader>
                <SkillSectionData>
                    <SkillSectionDataList>Microsoft SQL Server</SkillSectionDataList>
                    <SkillSectionDataList>Version Control</SkillSectionDataList>
                    <SkillSectionDataList>Web Services</SkillSectionDataList>
                    <SkillSectionDataList>MySQL</SkillSectionDataList>
                    <SkillSectionDataList>Firebase</SkillSectionDataList>
                    <SkillSectionDataList>Flutter</SkillSectionDataList>
                    <SkillSectionDataList>React</SkillSectionDataList>                                       
                </SkillSectionData>
            </div>         
        </SkillsContainer> 
       
        </div>
    )
}

export default Skills
