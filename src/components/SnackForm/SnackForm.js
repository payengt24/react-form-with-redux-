import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackForm extends Component {

    constructor(props) {
        super(props) //super calls the Component (parent)

        //Local state keeps track of user input
        this.state = {
            newSnack: '',

        }
    }

    handleSnackChange = (event) => {
        const action = { type: 'ADD_SNACK' }

        this.setState({
            newSnack: event.target.value,
        });
    }

    sendSnackToRedux = () => {

        const action = { type: 'ADD_SNACK', payload: this.state.newSnack };
        this.props.dispatch(action);

    }

    render() {
        return (
            <div>

                <h3>Snack</h3>
                <input onChange={this.handleSnackChange} value={this.state.newSnack} />
                <button onClick={this.sendSnackToRedux}>Submit</button>

            </div>
        )
    }
}

//connect() allow us to dispatch actions
export default connect()(SnackForm);