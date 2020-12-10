import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar name="INDEX" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
