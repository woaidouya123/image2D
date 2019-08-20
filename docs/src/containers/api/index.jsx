import React from 'react';
import Router from './router.jsx';
import { Link } from 'react-router-dom';
import $$ from 'image2d';

export default class Api extends React.Component {
    componentDidMount() {
        $$('.topmenu-item').attr('active', 'no');
        $$('#api').attr('active', 'yes');

        let apimenus = $$('.apimenu-item', document.getElementById('api-nav'));
        for (let i = 0; i < apimenus.length; i++) {
            let nodeName = apimenus[i].getAttribute('id');
            let items = document.getElementsByName(nodeName);
            for (let j = 0; j < items.length; j++) {
                items[j].setAttribute('url', "#/api/" + nodeName);
                items[j].setAttribute('index', j);
                items[j].setAttribute('flag', 'api-item');
            }
        }

    }
    render() {
        return (<div className='api'>
            <ul id='api-nav'>
                <li id='how-to-use' className='apimenu-item'><Link to='/api/how-to-use'>如何使用</Link></li>
                <li className='item' name='how-to-use'>关注的问题</li>
                <li className='item' name='how-to-use'>使用</li>
                <li className='item' name='how-to-use'>获取帮助</li>
                <li id='xhtml' className='apimenu-item'><Link to='/api/xhtml'>结点操作</Link></li>
                <li className='item' name='xhtml'>结点对象</li>
                <li className='item' name='xhtml'>编辑</li>
                <li className='item' name='xhtml'>样式和属性</li>
                <li className='item' name='xhtml'>事件相关</li>
                <li className='item' name='xhtml'>数据绑定</li>
                <li id='painter' className='apimenu-item'><Link to='/api/painter'>画笔</Link></li>
                <li className='item' name='painter'>canvas2D</li>
                <li className='item' name='painter'>svg</li>
                <li className='item' name='painter'>绘图方法</li>
                <li className='item' name='painter'>渐变色</li>
                <li className='item' name='painter'>变换</li>
                <li id='calculate' className='apimenu-item'><Link to='/api/calculate'>计算</Link></li>
                <li className='item' name='calculate'>二维坐标变换</li>
                <li className='item' name='calculate'>矩阵坐标变换</li>
                <li className='item' name='calculate'>曲线插值</li>
                <li className='item' name='calculate'>布局</li>
                <li className='item' name='calculate'>动画轮询</li>
                <li id='tool' className='apimenu-item'><Link to='/api/tool'>补充</Link></li>
                <li className='item' name='tool'>图层</li>
            </ul>
            <div>
                <Router></Router>
            </div>
        </div>);
    }
};
