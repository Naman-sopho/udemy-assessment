import React, { Component } from 'react';
import {Card, CardContent, StepContent, StepLabel, Step, Stepper, Typography, ListItem, List, 
        ListItemIcon, Checkbox, ListItemText, CardActions, Fab, Paper, Avatar, Chip, Tooltip } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../App.css';

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
            <Paper elevation={3} square={false} variant="outlined">
            <Stepper activeStep={activeStep} orientation="vertical">
                {questions.map((question, index) => (
                    <Step key={`q${index}`}>
                        <StepLabel onClick={() => this.setActiveStep(index)}>
                            <Typography style={{"font-weight": "bold"}} align="left">{question.label}</Typography>
                        </StepLabel>
                        <StepContent>
                            <Card elevation={3} square={false}>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align="left">{question.question}</Typography>
                                    <List>
                                        <ListItem key={`a${index}`} button onClick={() => this.handleToggle(index, 0)}>
                                            <Chip 
                                                className="option-chip"
                                                variant={answers[index] === 0 ? "default" : "outlined"} 
                                                avatar={<Avatar>A</Avatar>}
                                                label={<Typography align="left" style={{"width":"90vw"}}>{question.a}</Typography>}
                                                color="primary"
                                            />
                                        </ListItem>

                                        <ListItem key={`b${index}`} button onClick={() => this.handleToggle(index, 1)}>
                                            <Chip 
                                                className="option-chip"
                                                variant={answers[index] === 1 ? "default" : "outlined"} 
                                                avatar={<Avatar>B</Avatar>}
                                                label={<Typography align="left" style={{"width":"90vw"}}>{question.b}</Typography>}
                                                color="primary"
                                            />
                                        </ListItem>

                                        <ListItem key={`c${index}`} button onClick={() => this.handleToggle(index, 2)}>
                                            <Chip 
                                                className="option-chip"
                                                variant={answers[index] === 2 ? "default" : "outlined"} 
                                                avatar={<Avatar>C</Avatar>}
                                                label={<Typography align="left" style={{"width":"90vw"}}>{question.c}</Typography>}
                                                color="primary"
                                            />
                                        </ListItem>

                                        <ListItem key={`d${index}`} button onClick={() => this.handleToggle(index, 3)}>
                                            <Chip 
                                                className="option-chip"
                                                variant={answers[index] === 3 ? "default" : "outlined"} 
                                                avatar={<Avatar>D</Avatar>}
                                                label={<Typography align="left" style={{"width":"90vw"}}>{question.d}</Typography>}
                                                color="primary"
                                            />
                                        </ListItem>
                                    </List>
                                </CardContent>
                                <CardActions disableSpacing>
                                    { answers[index] !== -1 &&
                                        <div style={{"width":"100%"}}>
                                            <Tooltip title="Previous Question">
                                                <Fab aria-label="prev" disabled={index === 0} onClick={() => this.handlePrev(index)} style={{"margin":"10px", "float":"left"}}>
                                                    <ArrowBackIosIcon/>
                                                </Fab>
                                            </Tooltip>
                                            
                                            <Tooltip title="Next Question">
                                                <Fab aria-label="next" disabled={index === questions.length - 1} onClick={() => this.handleNext(index)} style={{"margin":"10px", "float":"right"}}>
                                                    <ArrowForwardIosIcon/>
                                                </Fab>
                                            </Tooltip>
                                        </div>
                                    }
                                </CardActions>
                            </Card>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            </Paper>
        );
    }
}

export default Questions;
