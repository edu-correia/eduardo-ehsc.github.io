import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import BlogPage from './pages/BlogPage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={BlogPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;