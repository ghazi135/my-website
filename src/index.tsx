import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <App/>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

reportWebVitals();

