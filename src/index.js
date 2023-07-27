import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const express = require('express');
// const dotenv = require('dotenv'); // Require the dotenv package

// dotenv.config(); // Load the environment variables from the .env file

// const app = express(); 

// // Email JS enviromental variables
// const service_id = process.env.REACT_APP_EMAIL_EMAIL_SERVICE_ID;
// const email_template_id=process.env.REACT_APP_EMAIL_TEMPLATE_ID;
// const emailjs_id= process.env.REACT_APP_EMAILJS_PRIVATE_KEY;

// app.listen(3000, () =>{

// });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
