import React, { Component } from 'react';
import './App.css';
import { Fab, Slide } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Quiz from './components/Quiz';

class App extends Component {

    componentWillMount() {
        this.setState({
            startQuiz: false
        });
    };

    handleStartQuiz() {
        this.setState({
            startQuiz: true
        });
    };

    render() {
        return (
            <div className="App">
                <Slide direction="up" in={!this.state.startQuiz}>
                    <header className="App-header">
                    <p>
                        Welcome to the Udemy Coding Challenge Quiz!!!
                    </p>

                    <Fab variant="extended" onClick={() => this.handleStartQuiz()}>
                        Start Quiz &nbsp;
                        <ArrowForwardIosIcon />
                    </Fab>

                    </header>
                </Slide>

                <Slide direction="down" in={this.state.startQuiz}>
                    <Quiz/>
                </Slide>
            </div>
        );
    };
}

export default App;
