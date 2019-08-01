import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import howToUse from './how-to-use.jsx';
import xhtml from './xhtml.jsx';
import painter from './painter.jsx';
import calculate from './calculate.jsx';
import tool from './tool.jsx';

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
