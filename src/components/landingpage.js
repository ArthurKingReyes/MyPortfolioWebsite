import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from './images/avatar.png';

class Landing extends Component{
    render(){
        return(
            <div className="set-background" style={{width: '100%', margin: 'auto', height:'100%'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src={avatar}
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Developer</h1>
                        <hr/>
                        <p>HTML | CSS | JavaScript | React | Java | C/C++</p>

                        <div className="social-links">
                            
                            {/* LinkedIn */}
                            {/*target="_blank" opens in a new tab */}
                            <a href="https://linkedin.com/in/arthurkingreyes" rel ="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/arthurkingreyes" rel ="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;