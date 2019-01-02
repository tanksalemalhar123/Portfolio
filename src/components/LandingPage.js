import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';


class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" alt="avatar"  className="avatar-img"/>
                    <div className="banner-text">
                        <h1>
                            Web Developer
                        </h1>
                    
                    <hr />

                    <p>
                        HTML | CSS | Bootstrap | JavaScript | React JS
                    </p>

                    <div className="social-links">
                        {/*LinkedIN */}
                        <a href="http://google.com" target="_blank"  rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" /> 
                        </a>

                          {/*Github */}
                          <a href="http://github.com" target="_blank"  rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" /> 
                        </a>

                          {/*FreeCode */}
                          <a href="http://freecodecamp.com" target="_blank"  rel="noopener noreferrer">
                            <i className="fa fa-free-code-camp" aria-hidden="true" /> 
                        </a>

                          {/*Youtube */}
                          <a href="http://youtube.com" target="_blank"  rel="noopener noreferrer">
                            <i className="fa fa-youtube-square" aria-hidden="true" /> 
                        </a>


                    </div>
                    </div>
                    
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;