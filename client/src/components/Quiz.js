import React, { Component } from 'react';
import axios from 'axios';

class Quiz extends Component {
    componentWillMount () {
        axios.get('questions').then( (response) => {
            console.log(response);
        });
    };

    render() {
        return(
            <div>
                <h4>
                    Hey Quiz :)
                </h4>
            </div>
        );
    };
}

export default Quiz;
