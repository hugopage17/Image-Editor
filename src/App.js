import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './Components/Uploader'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
              <Uploader/>
            </div>
        );
    }
}

export default App;
