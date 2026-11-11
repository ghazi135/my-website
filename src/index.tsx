import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {LanguageProvider} from "./i18n/LanguageContext";

ReactDOM.render(
    <BrowserRouter>
        <LanguageProvider>
            <App/>
        </LanguageProvider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorkerRegistration.unregister();

reportWebVitals();

