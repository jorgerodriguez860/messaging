// -------------------------
// Vanilla React
import React from 'react';
import ReactDOM from 'react-dom/client';
// -------------------------
// Added functionality
// ------------
// to route
import { BrowserRouter } from 'react-router-dom';
// ------------
// to use redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer'
// -------------------------
// Major components
import App from './App';
// -------------------------
// Styling
import "./css/Navbar.css"

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);