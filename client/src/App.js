import React, { Component } from 'react';
import './App.css';
import { Grid, Fab, Slide, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Quiz from './components/Quiz';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const font = "'Montserrat', sans-serif";

const muiTheme = createMuiTheme({
    typography : {
        fontFamily: font
    }
})

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
            <ThemeProvider theme={muiTheme}>
            <div className="App">
                <Grid container>
                    {!this.state.startQuiz ? 
                        <Grid item md={12}>
                            <Slide direction="down" in={!this.state.startQuiz}>
                                <header className="App-header">
                                <Typography gutterBottom variant="h3">
                                    Welcome to the Udemy Coding Challenge Quiz!!!
                                </Typography>

                                <Fab variant="extended" onClick={() => this.handleStartQuiz()}>
                                    Start Quiz &nbsp;
                                    <ArrowForwardIosIcon />
                                </Fab>

                                </header>
                            </Slide>
                        </Grid>
                        :
                        <Grid item md={12} className="App-header" justify="center" alignItems="center">
                            <Slide direction="up" in={this.state.startQuiz}>
                                <Quiz/>
                            </Slide>
                        </Grid>
                    }
                </Grid>
            </div>
            </ThemeProvider>
        );
    };
}

export default App;
