import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Dear excellent student,

// You have done amazing work! After launching your 
// project I was shocked and amazed that someone has worked outside 
// box and shown their creativity. I really liked your project and your 
// creativity. The theme is really good and user friendly. User experience 
// is really great and I enjoyed reviewing your project. However I feel bad 
// to inform you that you have not passed the project at the moment. Unfortunately 
// there are some errors and missing requirements. I have pointed out your missing 
// requirements and suggested how to fix them. Please go over them and update your 
// project with fixes and resubmit the project.

// If you have any question or doubt I recommend you to reach out to 
// your mentor as I understand that rubrics requirements or my 
// comments may not be easy to understand. I wish you good luck for the project.

// Keep learning and stay Udacious 