import iCrush from 'icrush';

// 引入启动界面
import App from './App.iCrush';

// 引入样式
import '@yelloxing/normalize.css';
import './styles/style.scss';

// 删除提示内容
document.getElementById('root').innerHTML = "<!-- image2D: https://github.com/yelloxing/image2D -->";

//根对象
window.icrush = new iCrush({

    //挂载点
    el: document.getElementById('root'),

    // 启动iCrush
    render: createElement => createElement(App)
});
