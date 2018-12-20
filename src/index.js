import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { reducer } from './reducer'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import * as serviceWorker from './serviceWorker';
import '/Users/user/FlatIrons/Proj_Mod5/calorycount-Frontend/node_modules/nutrition-label-jquery-plugin/nutritionLabel-min.css'

// const store = createStore(reducer)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(store);

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></ BrowserRouter> </Provider >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
