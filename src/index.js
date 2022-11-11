// -------------------------
// Vanilla React
import React from 'react';
import ReactDOM from 'react-dom/client';
// -------------------------
// Added functionality
// ------------
// to route
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// ------------
// to use redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
// -------------------------
// Major components
import BaseLayout from './components/layout/BaseLayout';
import Home from './components/links/Home';
import Login from './components/links/Login';
import Register from './components/links/Register';
import Chat from './components/links/Chat';
// -------------------------
// Styling
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>
);