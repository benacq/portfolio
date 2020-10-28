import React from 'react'
import {GridDisplayContainer, GridDataWrapper, GridChild, SectionHeader} from './GridElements'
import {FaHtml5, FaDatabase, FaMobileAlt,FaChartBar} from 'react-icons/fa';

function GridDisplay() {
    return (
        
    <GridDisplayContainer id="services">
    <h1 style={{marginBottom: '20px', paddingTop:'10px', textAlign: 'center', color: '#eee'}}>SERVICES</h1>
        <GridDataWrapper>
            <GridChild>
            <div style={{fontSize:'50px', color: '#f00946'}}><FaHtml5/></div>
                <SectionHeader>WEB DEVELOPMENT</SectionHeader>
            </GridChild>

            <GridChild>
                <div style={{fontSize:'50px', color: '#f00946'}}><FaMobileAlt/></div>
                <SectionHeader>APP DEVELOPMENT</SectionHeader>
            </GridChild>

            <GridChild>
                <div style={{fontSize:'50px', color: '#f00946'}}><FaDatabase/></div>
                <SectionHeader>DATABASES</SectionHeader>
            </GridChild>


            <GridChild>
                <div style={{fontSize:'50px', color: '#f00946'}}><FaChartBar/></div>
                <SectionHeader>DATA ANALYSIS</SectionHeader>
            </GridChild>
        </GridDataWrapper>

    </GridDisplayContainer>
    
    )
}

export default GridDisplay
