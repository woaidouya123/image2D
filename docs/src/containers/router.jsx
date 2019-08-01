import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import guide from './guide/index.jsx';
import api from './api/index.jsx';
import source from './source/index.jsx';
import about from './about/index.jsx';

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/guide" component={guide} />
            <Route exact path="/api" component={api} />
            <Route exact path="/source" component={source} />
            <Route exact path="/about" component={about} />
            <Redirect path="/" to={{ pathname: '/guide' }} />
        </Switch>
    </HashRouter>
);
