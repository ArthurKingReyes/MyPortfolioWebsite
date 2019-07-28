import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }
    
    toggleCategories(){
        var wendlers = require('./images/wendlerssc.png');
        var portfoliosite = require('./images/portfoliosite.png');
        var pixabay = require('./images/pixabay.png');
        
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">

                {/** -- React Projects  -- **/}
                <Card shadow="{5}" style={{minWidth: '540px', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '334px', background: 
                    "url(" + portfoliosite + ")"}}></CardTitle>
                    
                    <CardText> 
                        <h6 style={{color: 'black'}}>Portfolio (This site)</h6>
                        My personal portfolio website exhibiting my projects as well as information about me.
                        Uses React-MDL for material ui.
                    </CardText>
                    
                    <CardActions border>
                        <a href="https://github.com/ArthurKingReyes/MyPortfolioWebsite" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                </Card>

                <Card shadow="{5}" style={{minWidth: '540px', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '334px', background: 
                    "url(" + pixabay + ")"}}></CardTitle>
                    
                    <CardText> 
                    <h6 style={{color: 'black'}}>Pixabay Image Finder</h6>
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
                <Card shadow="{5}" style={{minWidth: '450px', margin:'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background: 
                    "url(" + wendlers + ")" }}></CardTitle>
                    
                    <CardText>
                    <h6 style={{color: 'black'}}>Wendler's 5/3/1 Calculator</h6>    
                    A calculator based on the Wendler's 531 strength training program. 
                    </CardText>
                    
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
                <Card shadow="{5}" style={{minWidth: '250px', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://static.techspot.com/images2/news/bigimage/2016/05/2016-05-31-image.jpg) center / cover'}}>
                    </CardTitle>
                    
                    <CardText>
                    <h6 style={{color: 'black'}}>Prime Number Generator</h6>
                    A multithreaded prime number generator written in Java.
                    </CardText>
                    
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