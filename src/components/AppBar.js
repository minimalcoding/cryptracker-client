import React, { Component } from 'react';
import Radium from 'radium';

import './AppBar.css';

class AppBar extends Component {
    render() {
        return <div className="app-bar">
            <h1>Cryptracker</h1>
        </div>
    }
}

export default Radium(AppBar);