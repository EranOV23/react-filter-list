import React, { Component } from 'react';
import TopBar from './TopBar'; 
import Main from './Main'; 


export default class App extends Component {

    render() {
        return (
        <div className="app">
            <TopBar/>
            <Main />
        </div>
        )
    }

}