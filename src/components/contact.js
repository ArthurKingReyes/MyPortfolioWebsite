import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatar from './images/avatar.png';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    {/** Left Cell */}
                    <Cell col={6}>
                        
                        <h2>Arthur King Reyes</h2>
                        <img
                            src={avatar}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (###) ### - ####</ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                    arthurreyes90@gmail.com</ListItemContent>
                            </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;