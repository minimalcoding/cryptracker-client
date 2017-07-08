import React, { Component } from 'react';
import Radium from 'radium';

import { Row, Container } from './Layout';
import AppBar from './AppBar';
import MainMessage from './MainMessage';
import ApiFactory from '../api';

import 'normalize.css/normalize.css';
import './App.css';

const api = ApiFactory();

const Header = props => {
    return <Row>
        {props.children}
    </Row>
}

const Main = props => {
    return <Row expand>
        {props.children}
    </Row>
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: {},
        };
    }

    async componentDidMount() {
    }

    render() {
        return (
            <Container>
                <Header>
                    <AppBar />
                </Header>
                <Main>
                </Main>
            </Container>
        );
    }
}

export default Radium(App);
