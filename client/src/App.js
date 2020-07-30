import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the Udemy Coding Challenge Quiz!!!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fab variant="extended">
              Start Quiz
              <ArrowForwardIosIcon />
            </Fab>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
