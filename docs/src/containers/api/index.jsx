import React from 'react';
import Router from './router.jsx';
import { Link } from 'react-router-dom';
import $$ from 'image2d';

export default class Api extends React.Component {
    componentDidMount() {
        $$('.topmenu-item').attr('active', 'no');
        $$('#api').attr('active', 'yes');
    }
    render() {
        return (<div className='api'>
            <ul>
                <li id='how-to-use' className='apimenu-item'><Link to='/api/how-to-use'>如何使用</Link></li>
                <li id='xhtml' className='apimenu-item'><Link to='/api/xhtml'>结点操作</Link></li>
                <li id='painter' className='apimenu-item'><Link to='/api/painter'>画笔</Link></li>
                <li id='calculate' className='apimenu-item'><Link to='/api/calculate'>计算</Link></li>
                <li id='tool' className='apimenu-item'><Link to='/api/tool'>小工具</Link></li>
            </ul>
            <div>
                <Router></Router>
            </div>
        </div>);
    }
};
