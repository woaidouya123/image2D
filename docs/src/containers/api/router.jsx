import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../../lazy';

const howToUse = asyncComponent(() => import('./how-to-use.jsx'));
const xhtml = asyncComponent(() => import('./xhtml.jsx'));
const painter = asyncComponent(() => import('./painter.jsx'));
const calculate = asyncComponent(() => import('./calculate.jsx'));
const tool = asyncComponent(() => import('./tool.jsx'));

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/api/how-to-use" component={howToUse} />
            <Route exact path="/api/xhtml" component={xhtml} />
            <Route exact path="/api/painter" component={painter} />
            <Route exact path="/api/calculate" component={calculate} />
            <Route exact path="/api/tool" component={tool} />
            <Redirect path="/api/" to={{ pathname: '/api/how-to-use' }} />
        </Switch>
    </HashRouter>
);
