import React, { Component } from 'react';
import { Box, CircularProgress, Dialog, DialogTitle, DialogContent, Typography, DialogActions, Fab } from '@material-ui/core';

class Score extends Component {
    render() {
        const { score, total, showScore } = this.props;
        return(
            <Dialog 
                disableBackdropClick 
                disableEscapeKeyDown
                open={showScore}
            >
                <DialogTitle>Score</DialogTitle>
                <DialogContent>
                    <div alignItems="center">
                    <Box position="relative" display="inline-flex">
                        <CircularProgress variant="static" thickness={8} size={100} value={Math.round(score/total * 100)}/>
                        <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="caption" component="div" color="textSecondary">
                                {`${score} / ${total}`}
                            </Typography>
                        </Box>
                    </Box>
                    </div>
                    <Typography gutterBottom variant="h5">Congratulations on a great score!</Typography>
                    <Typography variant="subtitle2">PS: Research has shown that a goldfish can actually have a memory span of three months.</Typography>
                </DialogContent>
                <DialogActions>
                    <a target="_blank" href="https://naman-sopho.github.io">
                        <Fab variant="extended" style={{"margin":"10px"}}>
                            Portfolio Website
                        </Fab>
                    </a>
                    <a target="_blank" href="https://naman-sopho.github.io/docs/CV.pdf">
                        <Fab variant="extended" style={{"margin":"10px"}}>
                            CV
                        </Fab>
                    </a>
                </DialogActions>
            </Dialog>
        );
    }
}

export default Score;
