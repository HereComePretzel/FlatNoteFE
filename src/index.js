import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer/index'
import {
  BrowserRouter,
  // Switch, //bundles routes, returns first match
  // Route, //checks url path, renders associated component
  // Link //changes URL path to whatever is in the "to" attribute
} from 'react-router-dom';



const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

