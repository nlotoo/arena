import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContext } from './context/stateContext';


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  // <React.StrictMode>
  <StateContext>
    <Router>
      <App />
    </Router>
  </StateContext>

  /* </React.StrictMode> */

);


// OLD VERSION 


// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>

//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();