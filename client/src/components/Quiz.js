import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Questions from './Questions';

class Quiz extends Component {
    componentWillMount () {
        this.setState({
            loading: true
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

    render() {
        return(
            <div>
                {   this.state.loading ? 
                    <CircularProgress/> 
                    :
                    <Questions questions={this.state.questions}/>
                }
            </div>
        );
    };
}

export default Quiz;
