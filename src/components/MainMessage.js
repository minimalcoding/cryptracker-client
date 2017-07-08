import React, { Component } from 'react';
import Radium from 'radium';

class CentralMessageBox extends Component {

    render() {
        return <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

            <div style={{display: 'flex', justifyContent: 'center'}}>test</div>
        </div> 
    }
} 

export default Radium(CentralMessageBox);