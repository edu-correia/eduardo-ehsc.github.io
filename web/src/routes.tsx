import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/projects" component={Projects} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;