import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Landing from './pages/Landing'
import OngMap from './pages/OngMap'

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OngMap} />
            </Switch>
        </BrowserRouter> 

    );
}

export default Routes;