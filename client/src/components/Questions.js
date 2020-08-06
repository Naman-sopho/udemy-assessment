import React, { Component } from 'react';
import {Card, CardContent, StepContent, StepLabel, Step, Stepper, Typography, ListItem, List, 
        ListItemIcon, Checkbox, ListItemText, CardActions, Fab, Snackbar } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckIcon from '@material-ui/icons/Check';

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            answers: Array(props.questions.length).fill(-1),
        }

        this.props.updateAnswers(Array(props.questions.length).fill(-1));
    }

    handleToggle(index, option) {
        var answers = this.state.answers

        // if same checkbox is clicked again
        if (answers[index] === option) {
            answers[index] = -1;
        }
        else {
            answers[index] = option;
        }

        this.setState({
            answers
        });

        this.props.updateAnswers(answers);
    }

    handleNext(index) {
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

    render() {
        const questions = this.props.questions;
        const { activeStep, answers } = this.state;
        return(
            <Stepper activeStep={activeStep} orientation="vertical">
                {questions.map((question, index) => (
                    <Step key={`q${index}`}>
                        <StepLabel onClick={() => this.setActiveStep(index)}>
                            <Typography style={{"font-weight": "bold"}}align="left">{`Question ${index+1}`}</Typography>
                        </StepLabel>
                        <StepContent>
                            <Card elevation={3}>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align="left">{question.question}</Typography>
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
                                    { answers[index] !== -1 &&
                                        <div>
                                            <Fab aria-label="prev" disabled={index === 0} onClick={() => this.handlePrev(index)} style={{"margin":"10px"}}>
                                                <ArrowBackIosIcon/>
                                            </Fab>
                                            <Fab aria-label="next" disabled={index === questions.length - 1} onClick={() => this.handleNext(index)} style={{"margin":"10px"}}>
                                                <ArrowForwardIosIcon/>
                                            </Fab>
                                        </div>
                                    }
                                </CardActions>
                            </Card>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        );
    }
}

export default Questions;
