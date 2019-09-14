import React from 'react';
import ReactDOM from 'react-dom';
import '@yelloxing/normalize.css';
import './style/root.scss';
import Router from './containers/router.jsx';
import './plugin/prettify';

ReactDOM.render(<Router></Router>, document.getElementById('root'));
