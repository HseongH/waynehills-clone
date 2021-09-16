import React from 'react';
import ReactDOM from 'react-dom';
// router
import { BrowserRouter } from 'react-router-dom';
// app
import App from './App';
// style
import './style/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
