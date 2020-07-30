import React, { Component } from 'react';
import './App.css';
import { Grid, Fab, Slide } from '@material-ui/core';
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
                <Grid container>
                    {!this.state.startQuiz ? 
                        <Grid item md={12}>
                            <Slide direction="down" in={!this.state.startQuiz}>
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
                        </Grid>
                        :
                        <Grid item md={12}>
                            <Slide direction="left" in={this.state.startQuiz}>
                                <Quiz/>
                            </Slide>
                        </Grid>
                    }
                </Grid>
            </div>
        );
    };
}

export default App;
