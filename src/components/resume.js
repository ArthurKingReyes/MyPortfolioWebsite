import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        {/* <div style={{textAlign: 'center'}}>
                        <img
                            src={avatar}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        </div> */}
                        <h2 style={{paddingTop: '2em'}}>Arthur King Reyes</h2>
                        <h4 style={{color: 'grey'}}>Software Developer</h4>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            endYear="May 2019"
                            schoolName="San Diego State University"
                            schoolCity="San Diego, CA"
                            schoolDescription="Bachelor of Science in Computer Science"
                        />
                    
                        <Education
                            endYear="May 2017"
                            schoolName="Southwestern College"
                            schoolCity="Chula Vista, CA"
                            schoolDescription="Associate Degree for Transfer (ADT)"
                        />

                        <Education
                            endYear="Jan 2010"
                            schoolName="Universal Technical Institute"
                            schoolCity="Rancho Cucamonga, CA"
                            schoolDescription="Certificate of completion in Automotive Repair"
                        />

                        <Education
                            endYear="May 2008"
                            schoolName="Otay Ranch High School"
                            schoolCity="Chula Vista, CA"
                            schoolDescription="High School Diploma"
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="Java"
                            progress={65}
                        />

                        <Skills
                            skill="C"
                            progress={60}
                        />

                        <Skills
                            skill="JavaScript"
                            progress={55}
                        />

                        <Skills
                            skill="HTML/CSS"
                            progress={40}
                        />
                        
                        <Skills
                            skill="React" 
                            progress={40}
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2> 
                        <Experience
                            startYear={2011}
                            endYear="Present"
                            jobName="Inter-Con Security Systems"
                            jobTitle="Security Guard"
                            jobDescription="Patrol site and ensure there are no security breaches"
                        />                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;