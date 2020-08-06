import React, { Component} from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

class Warning extends Component {
    render() {
        const { openWarning, handleClose, toAnswer } = this.props;

        return (
            <Snackbar anchorOrigin={{vertical:'top', horizontal:'center'}} open={openWarning} autoHideDuration={6000} onClose={(event, reason) => handleClose(event, reason)}>
                <MuiAlert elevation={6} variant="filled" severity="error">
                    {`Please answer the ${toAnswer} before submitting.`}
                </MuiAlert>
            </Snackbar>
        );
    }
}

export default Warning;
