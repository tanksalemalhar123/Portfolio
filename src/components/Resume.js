import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component{
    render(){
        return(
            <div>
               <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center' , paddingTop: '2em'}}>
                            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" alt="avatar" style={{height: '200px'}} />
                        </div>

                        <h2 style={{paddingTop: '1em' }}>
                            Malhar Tanksale
                        </h2>

                        <h4 style={{color:'grey'}}>
                            Programmer
                        </h4>
                        
                        <hr style={{borderTop: '3px solid #2c3e50',width: '100%' }}/>
                        
                        <p>
                        I want to make my Career in Web Development and optimize my skills to the fullest
                        </p>

                         <hr style={{borderTop: '3px solid #2c3e50',width: '100%' }}/>

                         <h5>
                            Address
                         </h5>

                         <p>
                             Laxmi Nagar, Nagpur , 440022
                         </p>
                         <h5>
                             Phone
                         </h5>

                        <p>
                            (+91) 9860674977
                        </p>

                        <h5>
                            Email
                        </h5>

                        <p>
                            tanksalemalhar123@gmail.com
                        </p>

                        <h5>
                            Website
                        </h5>

                        <p>
                            Coming Soon
                        </p>

                          <hr style={{borderTop: '3px solid #2c3e50',width: '100%' }}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    
                    <h2>
                        Education
                    </h2>


                    <Education startYear={2013}
                               endYear={2016}
                                schoolName="RTM Nagpur University"
                                schoolDescription="Bsc in Computer Science from DR.Ambedkar College"
                                
                    />

                     <Education startYear={2016}
                               endYear={2018}
                                schoolName="Bangalore University"
                                schoolDescription="MCA from Krupanidhi College"
                                
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Experience</h2>

                    <Experience startYear={2017}
                    
                    jobName="First Project"
                    jobDescription="My First Project was a Chatting Application in Python along with the Django framework"
                    />


                     <Experience startYear={2018}
                    jobName="Second Project"
                    jobDescription="My Second Project was in Android which just comprises of the Use of Firebase"
                    />

                    <Experience startYear={2018}
                    jobName="Third Project"
                    jobDescription="My Third Project was in React JS which just fetches the Users from GIT using the GIT API"
                    />

                    <Experience startYear={2018}
                    jobName="Fourth Project"
                    jobDescription="My Fourth Project was in React JS which is an Weather Application which uses weather api to fetch the real time weather details"
                    />

                    <Experience startYear={2018}
                    jobName="Fifth Project"
                    jobDescription="My Fifth Project was in React JS which is a Portfolio which uses Components and Routes to link all the web pages and uses mdl (material view)"
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>
                        Skills
                    </h2>

                      <Skills 
                    skill="HTML"
                    progress={80}
                    
                    />

                      <Skills 
                    skill="CSS"
                    progress={75}
                    
                    />

                    <Skills 
                    skill="Javascript"
                    progress={55}
                    
                    />

                      <Skills 
                    skill="React JS"
                    progress={50}
                    
                    />
              
                    
                    </Cell>       
                </Grid>
            </div>
        );
    }
}

export default Resume;