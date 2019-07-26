import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import self from './images/self.JPG';

class About extends Component{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <Grid className="aboutme-grid">
                    <Cell col={12}>
                    <h1 style={{fontSize: '66px'}}>About Me</h1>
                    <img 
                        src={self} 
                        alt='myself'
                        style={{width: '250px', marginBottom: '2rem'}}/>
                    <p>
                    I am a graduate of San Diego State University with my Bachelors in Computer Science.
                    My current interests include web development and learning about all the technologies
                    associated with it. Some front end technologies I am familiar with are: HTML, CSS, 
                    JavaScript, React, and WordPress.
                    Most of my education has been focused on using languages such as
                    Java and C which makes me the most comfortable with those languages and makes picking
                    up other Object Oriented programming languages easy. Some of my hobbies include playing
                    guitar as well as trying new food and craft breweries around San Diego. If you want a
                    website built or just want to jam, feel free to contact me!
                    </p>
                    <br/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;