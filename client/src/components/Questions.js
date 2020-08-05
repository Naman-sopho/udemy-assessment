import React, { Component } from 'react';
import {Card, CardHeader, CardContent, StepContent, StepLabel, Step, Stepper, Typography, ListItem, List, ListItemIcon, Checkbox, ListItemText, CardActions, IconButton, Snackbar } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            answers: Array(props.questions.length).fill(-1),
            openWarning: false,
            toAnswer: ''
        }
    }

    handleToggle(index, option) {
        var answers = this.state.answers
        answers[index] = option
        this.setState({
            answers
        })
    }

    handleNext(index) {
        if (this.state.activeStep === this.props.questions.length - 1) {
            const questions = this.props.questions
            const length = questions.length;
            const answers = this.state.answers;
            var count = 0;
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
                this.props.openScoreModal(response.data);
            });
        }

        this.setState({
            activeStep: index + 1
        });
    }

    handlePrev(index) {
        this.setState({
            activeStep: index - 1
        });
    }

    setActiveStep(index) {
        this.setState({
            activeStep: index
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

    render() {
        const questions = this.props.questions;
        const { activeStep, answers, openWarning, toAnswer } = this.state;
        return(
            <Stepper activeStep={activeStep} orientation="vertical">
                {questions.map((question, index) => (
                    <Step key={`q${index}`}>
                        <StepLabel onClick={() => this.setActiveStep(index)}>{`Question ${index+1}`}</StepLabel>
                        <StepContent>
                            <Card elevation={2}>
                                <CardHeader title={question.question}/>
                                <CardContent>
                                    <List>
                                        <ListItem key={`a${index}`} button onClick={() => this.handleToggle(index, 0)}>
                                            <ListItemIcon>
                                                <Checkbox edge="start" checked={answers[index] === 0}/>
                                            </ListItemIcon>
                                            <ListItemText id={`a${index}`}>
                                                <Typography>{question.a}</Typography>
                                            </ListItemText>
                                        </ListItem>

                                        <ListItem key={`b${index}`} button onClick={() => this.handleToggle(index, 1)}>
                                            <ListItemIcon>
                                                <Checkbox edge="start" checked={answers[index] === 1}/>
                                            </ListItemIcon>
                                            <ListItemText id={`b${index}`}>
                                                <Typography>{question.b}</Typography>
                                            </ListItemText>
                                        </ListItem>

                                        <ListItem key={`c${index}`} button onClick={() => this.handleToggle(index, 2)}>
                                            <ListItemIcon>
                                                <Checkbox edge="start" checked={answers[index] === 2}/>
                                            </ListItemIcon>
                                            <ListItemText id={`c${index}`}>
                                                <Typography>{question.c}</Typography>
                                            </ListItemText>
                                        </ListItem>

                                        <ListItem key={`d${index}`} button onClick={() => this.handleToggle(index, 3)}>
                                            <ListItemIcon>
                                                <Checkbox edge="start" checked={answers[index] === 3}/>
                                            </ListItemIcon>
                                            <ListItemText id={`d${index}`}>
                                                <Typography>{question.d}</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="prev" disabled={index === 0} onClick={() => this.handlePrev(index)}>
                                        <ArrowBackIosIcon/>
                                    </IconButton>
                                    <IconButton aria-label="next" onClick={() => this.handleNext(index)}>
                                        { activeStep === questions.length - 1 ? <CheckIcon/> : <ArrowForwardIosIcon/> }
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </StepContent>
                    </Step>
                ))}
                <Snackbar anchorOrigin={{vertical:'top', horizontal:'center'}} open={openWarning} autoHideDuration={6000} onClose={(event, reason) => this.handleClose(event, reason)}>
                    <MuiAlert elevation={6} variant="filled" severity="error">
                        {`Please answer the ${toAnswer} before submitting.`}
                    </MuiAlert>
                </Snackbar>
            </Stepper>
        );
    }
}

export default Questions;
