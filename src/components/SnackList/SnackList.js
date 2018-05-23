import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class SnackList extends Component {

    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <h4>List of Snack</h4>
                {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}

                <ul>
                    {

                        this.props.reduxState.snackReducer.map((snack, i) => <li key={i}>
                            {snack}
                        </li>)
                    }

                </ul>


            </div>
        )
    }
}

//connect() allow us to dispatch actions
export default connect(mapReduxStateToProps)(SnackList);