import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <Grid>
                        <Cell col={2}>
                        <div style={{display: 'flex'}}>{this.props.skill}</div>
                        </Cell>

                        <Cell col={10}>
                        <ProgressBar style={{margin:'auto', width:'80%'}} progress={this.props.progress} />
                        </Cell>
                    </Grid>
                    
                    
                    
                    {/*}
                    <div style={{display: 'flex'}}>{this.props.skill}
                    <ProgressBar style={{margin:'auto', width:'80%'}} progress={this.props.progress} />                  
                    </div> */}
                </Cell>
            </Grid>
        )
    }
}

export default Skills;