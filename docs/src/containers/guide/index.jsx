import React from 'react';
import $$ from 'image2d';

export default class Guide extends React.Component {
    componentDidMount() {
        // 格式化代码
        prettyPrint();

        $$('.topmenu-item').attr('active', 'no');
        $$('#guide').attr('active', 'yes');
    }
    render() {
        return (
            <div className='guider'>
                <div className="banner">
                    基于svg和canvas2D提供更友好的二维绘图接口，包括常规的辅助方法！
                </div>
                <h2>
                    概要
                </h2>
                <p>
                    开发这个库的初衷是希望越来越多的人可以更自由的发挥自己的创意，感受绘图的乐趣，并把积累的经验分享出来，推动库本身的发展，从而不断优化！因此，这个库永远的是自由、开源、讨论和进步的。
                </p>
                <p>
                    我们欢迎任何人的加入，具体的内容你可以通过访问
                    <a href="https://github.com/yelloxing/image2D/blob/master/CONTRIBUTING.md">贡献指南</a>
                    来找到你可以参与的部分。任何时候，特别是遇到疑惑，联系
                    <a href="mailto:yelloxing@gmail.com">作者</a>
                    都会是一个好主意。当然，提
                    <a href="https://github.com/yelloxing/image2D/issues">issue</a>
                    也是不错的，因为这样更方便大家交流！
                </p>
                <h2>
                    起步
                </h2>
                <p>
                    具体的使用说明请查看
                    <a href="#/api/">文档</a>
                    一节，这里为了方便介绍，你需要搭建一个基本的开发环境来跟着我们学习，很简单，你只需要下载最新的
                    <a download='image2D.min.js' href="./image2D.min.guider.js">image2D.min.js</a>
                    并通过script标签引入即可。
                </p>
                <p>
                    作为入门，我们这里只是简单的说明一下如何绘图，具体的辅助方法和一些细节在
                    <a href="#/api/">文档</a>
                    有进行说明，或者你可以提
                    <a href="https://github.com/yelloxing/image2D/issues">issue</a>
                    进行交流，为了简化，这里不再赘述。
                </p>
                <h4>
                    获取画笔
                </h4>
                <p>
                    绘图的第一步当然是获取画笔了，画笔分为两种：Canvas2D和SVG，我们来看看具体的代码：
                </p>
                <pre className='prettyprint lang-js'>var painter=$$('#painter').painter();</pre>
                <p>
                    上面的$$('#painter')返回一个image2D对象，通过ID选择器查找结点，然后调用对象上的painter方法就可以获取画笔了。
                </p>
                <p>
                    如何判断画笔的类型？如果结点是canvas获取的就是Canvas2D画笔，如果结点是svg获取的就是SVG画笔。
                </p>
                <h4>
                    配置
                </h4>
                <p>
                    不管是什么画笔，都一样可以进行配置（当然有缺省值），比如画笔的粗细，颜色等，下面列出部分选项：
                </p>
                <pre className='prettyprint lang-js'>{`painter.config({

    "font-size":文字大小,

    "lineWidth":线条宽度,

    ......
});`}</pre>
                <p>
                    具体的配置选项请查看
                    <a href="#/api/painter">画笔</a>
                    一节。
                </p>
                <h4>
                    绘图方法
                </h4>
                <p>
                    画笔获取并配置好了以后，直接调用画笔上的方法即可绘图，我们拿canvas举例子。
                </p>
                <pre className='prettyprint lang-js special-class-demo1'>{`$$('canvas')
.attr({
    "with":200,
    "height":100
})
.painter()
.config({
    "lineWidth":10,
    "fillStyle":"red",
    "strokeStyle":"green"
})
.fillArc(100, 0, 50, 100, 0, Math.PI)
.strokeArc(100, 0, 50, 95, 0, Math.PI);`}</pre>
                <p>
                    具体的绘图方法也请查看
                    <a href="#/api/">文档</a>
                    一节中关于画笔的部分。
                </p>
                <p>
                    怎么样？是不是很简单，虽然直接使用canvas或svg也可以实现，不过借助这个库绘图会更简单，你可以把更多的精力放在绘制出更有趣的作品上（如果借助本库开发了有趣的作品，可以联系我们，和大家一起分享）。
                </p>
                <p>
                    最后，祝你好运！
                </p>
                <h2>
                    下一步
                </h2>
                <p>
                    请务必查看
                <a href="#/api/">这个文档</a>
                    。在这里，你将找到所有的接口文档，包括一些必要的说明和重要的使用用例。这里还有一个方便的
                <a href="https://github.com/yelloxing/image2D/issues">问题交流</a>
                    的部分，你可以把你使用的后的改进意见反馈给我们，或者在这里提出使用疑惑。
                </p>
            </div>
        );
    }
};
