import React from 'react';
import Router from './router.jsx';
import { Link } from 'react-router-dom';

export default class Api extends React.Component {
    render() {
        return (<div>
            <ul>
                <li>
                    <Link to='/api/how-to-use'>如何使用</Link>
                    <Link to='/api/xhtml'>结点操作</Link>
                    <Link to='/api/painter'>画笔</Link>
                    <Link to='/api/calculate'>计算</Link>
                    <Link to='/api/tool'>小工具</Link>
                </li>
            </ul>
            <div>
                <Router></Router>
            </div>
        </div>);
    }
};
