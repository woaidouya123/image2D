import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../lazy';

const guide = asyncComponent(() => import('./guide/index.jsx'));
const api = asyncComponent(() => import('./api/index.jsx'));
const source = asyncComponent(() => import('./source/index.jsx'));
const about = asyncComponent(() => import('./about/index.jsx'));

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/guide/*" component={guide} />
            <Route exact path="/api/*" component={api} />
            <Route exact path="/source/*" component={source} />
            <Route exact path="/about/*" component={about} />
            <Redirect path="/*" to={{ pathname: '/guide/' }} />
        </Switch>
    </HashRouter>
);
