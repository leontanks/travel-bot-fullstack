import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class TextAnalysis extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {}
        };

        fetch(`/api/text/analytics`, options)
            .then(res => res.json())
            .then(text => console.log(text))
            .then(state => this.setState(state))
    }

    render() {
        //const {} = this.state;
        return (
            <div className="test">
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                    Get data
                </Button>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

export default TextAnalysis;