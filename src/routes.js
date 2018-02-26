import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Home from './components/Home';
import Editions from './components/Editions';
import About from './components/About';
import Page404 from './components/Page404';

const AppRoutes = () => {
    return (   
        <App>
            <Switch>
                <Route exact path="/quienes-somos" component={About} />
                <Route exact path="/ediciones" component={Editions} />
                <Route exact path="/" component={Home} />
                <Route component={Page404} />
            </Switch>
        </App>
    );
}

export default AppRoutes;
