import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Home from './components/Home';
import Editions from './components/Editions';
import Interviews from './components/Interviews';
import Interview1 from './components/Interviews/_Interview-1';
import Interview2 from './components/Interviews/_Interview-2';
import Interview3 from './components/Interviews/_Interview-3';
import Interview4 from './components/Interviews/_Interview-4';
import Interview5 from './components/Interviews/_Interview-5';
import Interview6 from './components/Interviews/_Interview-6';
import Interview7 from './components/Interviews/_Interview-7';
import Interview8 from './components/Interviews/_Interview-8';
import Interview9 from './components/Interviews/_Interview-9';
import Interview10 from './components/Interviews/_Interview-10';
import Interview11 from './components/Interviews/_Interview-11';
import Interview12 from './components/Interviews/_Interview-12';
import Interview13 from './components/Interviews/_Interview-13';
import Interview14 from './components/Interviews/_Interview-14';
import Interview15 from './components/Interviews/_Interview-15';
import Interview16 from './components/Interviews/_Interview-16';
import Interview17 from './components/Interviews/_Interview-17';
import Interview18 from './components/Interviews/_Interview-18';
import About from './components/About';
import Page404 from './components/Page404';

const AppRoutes = () => {
    return (   
        <App>
            <Switch>
                <Route exact path="/quienes-somos" component={About} />
                <Route exact path="/ediciones" component={Editions} />
                <Route exact path="/entrevistas" component={Interviews} />
                <Route exact path="/entrevista/wilson-lopez" component={Interview1} />
                <Route exact path="/entrevista/rochi-stevenson" component={Interview2} />
                <Route exact path="/entrevista/luna-eikar" component={Interview3} />
                <Route exact path="/entrevista/alejandro-ordoñez" component={Interview4} />
                <Route exact path="/entrevista/amada-rosa-perez" component={Interview5} />
                <Route exact path="/entrevista/celines-diaz" component={Interview6} />
                <Route exact path="/entrevista/felipe-arias" component={Interview7} />
                <Route exact path="/entrevista/maria-angelica" component={Interview8} />
                <Route exact path="/entrevista/juan-manuel-cotelo" component={Interview9} />
                <Route exact path="/entrevista/son-by-4" component={Interview10} />
                <Route exact path="/entrevista/jesse-demara" component={Interview11} />
                <Route exact path="/entrevista/hermana-ines-de-jesus" component={Interview12} />
                <Route exact path="/entrevista/ricardo-castañon" component={Interview13} />
                <Route exact path="/entrevista/ruben-garcia" component={Interview14} />
                <Route exact path="/entrevista/joan-sanchez" component={Interview15} />
                <Route exact path="/entrevista/fernando-casanova" component={Interview16} />
                <Route exact path="/entrevista/padre-angel-espinosa" component={Interview17} />
                <Route exact path="/entrevista/dumas-y-mary" component={Interview18} />
                <Route exact path="/" component={Home} />
                <Route component={Page404} />
            </Switch>
        </App>
    );
}

export default AppRoutes;

