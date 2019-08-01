import React from 'react';
import Router from './router.jsx';
import { Link } from 'react-router-dom';

export default class Api extends React.Component {
    render() {
        return (<div className='api'>
            <ul>
                <li><Link to='/api/how-to-use'>如何使用</Link></li>
                <li><Link to='/api/xhtml'>结点操作</Link></li>
                <li><Link to='/api/painter'>画笔</Link></li>
                <li><Link to='/api/calculate'>计算</Link></li>
                <li><Link to='/api/tool'>小工具</Link></li>
            </ul>
            <div>
                <Router></Router>
            </div>
        </div>);
    }
};
