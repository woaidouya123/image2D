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
            <ul id='api-nav'>
                <li id='how-to-use' className='apimenu-item'><Link to='/api/how-to-use'>如何使用</Link></li>
                <li className='level1 item' name='how-to-use-small'>关注的问题</li>
                <li className='level1 item' name='how-to-use-small'>使用</li>
                <li className='level1 item' name='how-to-use-small'>获取帮助</li>
                <li id='xhtml' className='apimenu-item'><Link to='/api/xhtml'>结点操作</Link></li>
                <li className='level1 item' name='xhtml-small'>结点对象</li>
                <li className='level1 item' name='xhtml-small'>编辑</li>
                <li className='level1 item' name='xhtml-small'>样式和属性</li>
                <li className='level1 item' name='xhtml-small'>事件相关</li>
                <li className='level1 item' name='xhtml-small'>数据绑定</li>
                <li id='painter' className='apimenu-item'><Link to='/api/painter'>画笔</Link></li>
                <li className='level1 item' name='painter-small'>位图canvas2D</li>
                <li className='level1 item' name='painter-small'>矢图svg</li>
                <li className='level1 item' name='painter-small'>通用绘图方法</li>
                <li id='calculate' className='apimenu-item'><Link to='/api/calculate'>计算</Link></li>
                <li className='level1 item' name='calculate-small'>二维坐标变换</li>
                <li className='level1 item' name='calculate-small'>矩阵坐标变换</li>
                <li className='level1 item' name='calculate-small'>曲线插值</li>
                <li className='level1 item' name='calculate-small'>布局</li>
                <li className='level1 item' name='calculate-small'>动画轮询</li>
                <li id='tool' className='apimenu-item'><Link to='/api/tool'>小工具</Link></li>
                <li className='level1 item' name='tool-small'>图层</li>
            </ul>
            <div>
                <Router></Router>
            </div>
        </div>);
    }
};
