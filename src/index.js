import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <AppRoutes />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
