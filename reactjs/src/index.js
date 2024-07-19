import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HOCImp from './HOCImp';
import reportWebVitals from './reportWebVitals';
import { TimeClock } from './Concepts/TimeClock/TimeClock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HOCImp /> */}
    <TimeClock />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
