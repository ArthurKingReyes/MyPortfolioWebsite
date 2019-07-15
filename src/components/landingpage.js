import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from './images/avatar.png';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
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
                        </div>
                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;