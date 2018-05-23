import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const snackReducer = (state = [], action) => {
    if (action.type === 'ADD_SNACK') {
        console.log('The element', action);
        return [...state, action.payload];
    }
    return state;
};

const storeInstance = createStore (
    combineReducers ({
        snackReducer,
    }),      
    compose(
        applyMiddleware(logger),

    ),
)

ReactDOM.render(<Provider store= {storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
