import React, { Component } from 'react';

import Clock from './components/Clock';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Clock />
            </div>
        );
    }
}

export default App;
