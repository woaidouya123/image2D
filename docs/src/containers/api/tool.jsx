import React from 'react';
import $$ from 'image2d';

export default class Tool extends React.Component {
    componentDidMount() {
        // 格式化代码
        prettyPrint();

        let lis = document.getElementById('api-nav').getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
            lis[i].setAttribute('active', 'no');
        }

        // 修改菜单状态
        $$('.apimenu-item').attr('active', 'no');
        $$('#tool').attr('active', 'yes');

         // 更新导航菜单信息
         window.image2d_docs_api_navHelper = {
            "small": [],
            "little": [],
            "type":"tool"
        };

        let smallTitles = $$('.title.small');
        let littleTitles = $$('.title.little');

        for (let i = 0; i < smallTitles.length; i++) {
            window.image2d_docs_api_navHelper.small[i] = {
                "top": smallTitles[i].offsetTop
            };
        }

        for (let i = 0; i < littleTitles.length; i++) {
            window.image2d_docs_api_navHelper.little[i] = {
                "top": littleTitles[i].offsetTop
            };
        }
    }
    render() {
        return (<div className='container'>
            <p>
                因为绘制的时候，比如canvas2D没有图层，某个数据改变可能就意味着需要全部重新绘制等，基于这些考虑，在这一章，对前面进行必要的补充。
        </p>

            <h4 className="title small">图层</h4>
            <p>
                首先需要明确，图层服务的对象是canvas2D，svg某种意义上天生具有图层，不需要额外设计。让我们首先看看如何获取一个图层对象：
        </p>
            <pre className='prettyprint lang-js'>var layer=imageObject.layer();</pre>

            <p>
                这里的图层可以类比photoshop的图层去理解，我们提供了几个类似的方法来帮助使用图层对象。
        </p>

            <p>
                图层对象管理着图层，通过传递id可以获取对应图层的画笔，如果该图层不存在会自动创建（这里的画笔就是canvas2D画笔）：
        </p>
            <pre className='prettyprint lang-js'>var painter=layer.painter(id);</pre>

            <p>
                删除指定图层：
        </p>
            <pre className='prettyprint lang-js'>layer.delete(id);</pre>

            <p>
                图层中的内容不会显示在画布上，为了显示在画布上，需要手动更新：
        </p>
            <pre className='prettyprint lang-js'>layer.update();</pre>

            <p>
                隐藏图层：
        </p>
            <pre className='prettyprint lang-js'>layer.hidden(id);</pre>

            <p>
                显示图层：
        </p>
            <pre className='prettyprint lang-js'>layer.show(id);</pre>
        </div>);
    }
};
