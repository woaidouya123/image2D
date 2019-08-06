import React from 'react';
import $$ from 'image2d';

export default class Guide extends React.Component {
    componentDidMount() {
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
                    编辑中，敬请期待！
                </p>
                <h2>
                    起步
                </h2>
                <p>
                    编辑中，敬请期待！
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
                    如果你对未来版本的接口等设计上有好的想法，可以提
                    <a href="https://github.com/image-foundation/image2D.RFC">RFC</a>
                    进行讨论。
                </p>
            </div>
        );
    }
};
