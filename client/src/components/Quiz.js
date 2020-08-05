import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Questions from './Questions';
import { Dialog, DialogTitle, DialogContent, Box, Typography } from '@material-ui/core';
import '../App.css'

class Quiz extends Component {
    componentWillMount () {
        this.setState({
            loading: true,
            score: 0,
            questions: []
        });

        axios.get('questions').then( (response) => {
            this.setState({
                questions: response.data
            }, function(){
                this.setState({
                    loading: false
                });
            });
        });
    };

    openScoreModal(score) {
        this.setState({
            score,
            showScore: true
        });
    }
    render() {
        return(
            <div className="quiz">
                 <Typography gutterBottom variant="h3" color="white">Udemy Coding Challenge Quiz</Typography>
                {   this.state.loading ? 
                    <CircularProgress/> 
                    :
                    <div>
                        <Questions questions={this.state.questions} openScoreModal={(score) => this.openScoreModal(score)}/>
                    </div>
                }
                <Dialog 
                    disableBackdropClick 
                    disableEscapeKeyDown
                    open={this.state.showScore}
                >
                    <DialogTitle>Score</DialogTitle>
                    <DialogContent>
                        <Box position="relative" display="inline-flex">
                            <CircularProgress variant="static" value={Math.round(this.state.score/this.state.questions.length * 100)}/>
                            <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="caption" component="div" color="textSecondary">
                                    {`${this.state.score} / ${this.state.questions.length}`}
                                </Typography>
                            </Box>
                        </Box>
                    </DialogContent>
                </Dialog>
            </div>
        );
    };
}

export default Quiz;
