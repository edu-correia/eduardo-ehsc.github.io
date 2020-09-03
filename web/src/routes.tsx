import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import BlogPage from './pages/BlogPage';

function Routes(){
    return(
        <HashRouter basename="/">
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={BlogPage} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;