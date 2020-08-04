import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

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
                    this.state.questions.map(question => (
                        <p>{question.question}</p>
                    ))
                }
            </div>
        );
    };
}

export default Quiz;
