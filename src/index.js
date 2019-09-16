import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import Amplify, { Auth } from 'aws-amplify'

Amplify.configure({
    Auth: {
        // Required Amazon Cognito Identity Pool ID
        identityPoolId: "xx-xxxx-x:",
        // Required - Amazon Cognito Region
        region: "XXXX",
        //Optional - Amazon Cognito User Pool ID
        userPoolId: "XXXXXX",
        //Optional - Amazon Cognito Web Client ID
        userPoolWebClientId: "xxxxxxx"

    }
})

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
