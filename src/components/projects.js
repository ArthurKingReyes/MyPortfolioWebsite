import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }
    
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">

                {/** -- React Projects  -- **/}
                <Card shadow="{5}" style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}}>Portfolio Website (This Site)</CardTitle>
                    {/* change url to a screenshot of the website */}
                    <CardText> 
                        My personal portfolio website exhibiting my projects as well as information about me.
                        Uses React-MDL for material ui.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/ArthurKingReyes/MyPortfolioWebsite" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                </Card>

                <Card shadow="{5}" style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}}>Pixabay Image Finder</CardTitle>
                    {/* change url to a screenshot of the website */}
                    <CardText> 
                    Uses the Pixabay REST API and Axios, a Promise based HTTP client, to retrieve images from the Pixabay website based on the search keyword the user inputs.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/ArthurKingReyes/Pixabay-Image-Finder" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://dazzling-boyd-08c457.netlify.com/" rel="noopener noreferrer" target="_blank">
                            <Button colored>Demo</Button>
                        </a>
                    </CardActions>
                </Card>
                
                </div>
            )
        }
        
        else if(this.state.activeTab === 1){ 
            return(
                <div className="projects-grid">

                {/** -- JavaScript  Projects-- **/}
                <Card shadow="{5}" style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://i2.wp.com/www.nuimedia.com/wp-content/uploads/2017/01/javascript-logo.png?ssl=1) center / cover'}}>
                        Wendler's 5/3/1 Assistant
                    </CardTitle>
                    {/* change url to a screenshot of the website */}
                    <CardText>A calculator based on the Wendler's 531 strength training program. </CardText>
                    <CardActions border>
                        <a href="https://laughing-pasteur-894d80.netlify.com/" rel="noopener noreferrer" target="_blank">
                            <Button colored>Demo</Button>
                        </a>
                    </CardActions>
                </Card>
                </div>
            )
        }
        
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">

                {/** -- Java Projects  -- **/}
                <Card shadow="{5}" style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://static.techspot.com/images2/news/bigimage/2016/05/2016-05-31-image.jpg) center / cover'}}>
                        Prime Number Generator
                    </CardTitle>
                    {/* change url to a screenshot of the website */}
                    <CardText>A multithreaded prime number generator.</CardText>
                    <CardActions border>
                        <a href="https://github.com/ArthurKingReyes/PrimeGenJava" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs"> 
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>JavaScript</Tab>
                <Tab>Java</Tab>
            </Tabs>

            
            <Grid>
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Projects;