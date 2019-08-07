import React from 'react';
import $$ from 'image2d';

export default class HowToUse extends React.Component {
    componentDidMount() {
        // 格式化代码
        prettyPrint();

        let lis = document.getElementById('api-nav').getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
            lis[i].setAttribute('active', 'no');
        }

        // 修改菜单状态
        $$('.apimenu-item').attr('active', 'no');
        $$('#how-to-use').attr('active', 'yes');

        // 更新导航菜单信息
        window.image2d_docs_api_navHelper = {
            "small": [],
            "little": [],
            "type":"how-to-use"
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
                首先，让我们来了解一个这个库主要解决的问题是什么，如何使用以及问题反馈等基本信息。
        </p>

            <h4 className="title small">关注的问题</h4>
            <p>
                本库致力于提供更简单的Web端二维绘图接口，主要包括这些方面：画笔、辅助计算、结点操作和一些零碎的小工具方法。我们希望绘图是简单而有趣的、高效而愉悦的！
        </p>
            <p>
                主要是在svg和canvas2D上绘图，虽然有提供比如Maritx4坐标变换等三维相关方法，这是考虑到一些潜在的需求。
        </p>

            <h4 className="title small">使用</h4>
            <p>
                如果你开发的是一个web项目，直接在页面引入打包后的文件后即可（在代码中通过image2D或$$调用）：
        </p>
            <pre className='prettyprint lang-html'>&lt;script src="./build/image2D.min.js" type="text/javascript"&gt;&lt;/script&gt;</pre>
            <p>
                如果你想通过npm方式管理，首先你需要通过命令行安装image2D，就像这样：
        </p>
            <pre className='prettyprint lang-js'>npm install --save image2d</pre>
            <p>
                安装好了以后，在需要的地方引入即可：
        </p>
            <pre className='prettyprint lang-js'>{`// ESMAScript6+规范引入
import $$ from 'image2d';`}</pre>
            <p>
                或者
        </p>
            <pre className='prettyprint lang-js'>{`// CommonJS / AMD规范引入
const $$ = require("image2d");`}</pre>

            <h4 className="title small">获取帮助</h4>
            <p>
                在使用image2D的时候，如果遇到任何疑惑或问题，包括建议或对未来版本的想法，请先在
            <a target="_blank" href="https://github.com/yelloxing/image2D/issues">Github issue</a>
                上查找是否存在相似内容，然后进行补充或追问，当然也可以增加新的话题进行交流，除非特殊情况，你会在48小时内获得
            <a href="mailto:yelloxing@gmail.com">作者</a>
                回复。
        </p>
        </div>);
    }
};
