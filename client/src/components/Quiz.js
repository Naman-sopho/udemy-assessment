import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Questions from './Questions';
import { Dialog, DialogTitle, DialogContent, Box, Typography, Fab } from '@material-ui/core';
import '../App.css';
import CheckIcon from '@material-ui/icons/Check';
import Warning from './Warning';
import Score from './Score';

class Quiz extends Component {
    componentWillMount () {
        this.setState({
            loading: true,
            score: 0,
            questions: [],
            answers: [],
            score: 0,
            openWarning: false,
            showScore: false,
            toAnswer: ''
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

    handleSubmit() {
        const { answers, questions } = this.state;
        const length = questions.length;
        var final = '';

        for (var index = 0; index < length; index++) {
            if (answers[index] == -1) {
                if (final.length == 0) {
                    final += index+1;
                }
                else {
                    final += `, ${index+1}`;
                }
            }
        }

        if (final.length > 0) {
            this.setState({
                openWarning: true,
                toAnswer: final.length > 1 ? `questions ${final}` : `question ${final}`
            });

            return;
        }

        var data = {};
        var a = `Q${1}`;
        for (var index=0; index < length; index++) {
            data[`${questions[index].id}`] = answers[index];
        }

        axios.post('check_answers', {
            answers: data
        }).then((response) => {
            this.openScoreModal(response.data);
        });
    }

    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({
            openWarning: false
        });
    }

    updateAnswers(answers) {
        this.setState({answers});
    }

    render() {
        return(
            <div className="quiz">
                 <Typography gutterBottom variant="h3" color="white">Udemy Coding Challenge Quiz</Typography>
                {   this.state.loading ? 
                    <CircularProgress/> 
                    :
                    <div>
                        <Questions questions={this.state.questions} openScoreModal={(score) => this.openScoreModal(score)} updateAnswers={(answers)=> this.updateAnswers(answers)}/>
                    </div>
                }
                
                <Fab variant="extended" onClick={() => this.handleSubmit()} style={{"margin":"10px"}}>
                    Submit Quiz &nbsp;
                    <CheckIcon/>
                </Fab>
                
                <Warning openWarning={this.state.openWarning} toAnswer={this.state.toAnswer} handleClose={(event, reason) => this.handleClose(event, reason)}/>
                <Score score={this.state.score} total={this.state.questions.length} showScore={this.state.showScore}/>

            </div>
        );
    };
}

export default Quiz;
