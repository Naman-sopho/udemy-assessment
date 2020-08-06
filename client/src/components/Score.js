import React, { Component } from 'react';
import { Box, CircularProgress, Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';

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
                    <Box position="relative" display="inline-flex">
                        <CircularProgress variant="static" value={Math.round(score/total * 100)}/>
                        <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="caption" component="div" color="textSecondary">
                                {`${score} / ${total}`}
                            </Typography>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        );
    }
}

export default Score;
