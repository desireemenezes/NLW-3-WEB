import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Ong from './pages/Ong'
import CreateOng from './pages/CreateOng'
import OngMap from './pages/OngMap'

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />

                <Route path="/app" component={OngMap} />
                <Route path="/ongs/create" component={CreateOng} />
                <Route path="/ongs/:id" component={Ong} />
            </Switch>
        </BrowserRouter> 

    );
}

export default Routes;