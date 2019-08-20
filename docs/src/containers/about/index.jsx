import React from 'react';
import $$ from 'image2d';

export default class About extends React.Component {
    componentDidMount() {
        $$('.topmenu-item').attr('active', 'no');
        $$('#about').attr('active', 'yes');
    }
    render() {
        return (
            <div className='about'>
                <h2>
                    项目状态
                </h2>
                <p>
                    目前项目已经稳定，短期内的任务是优化或丰富接口、修改错误和开发作品。我们期待你的加入！
                </p>
                <p>
                    如果希望加入，请联系
                    <a href="mailto:yelloxing@gmail.com">作者</a>
                    说明希望加入的部分。
                </p>
                <h2>
                    参与进来
                </h2>
                <p>
                    参与的方式有很多，并不是贡献代码才算参与了，只要是利于项目成长的就都是有价值的，包括批评的声音。大致描述的话，目前有如下参与方式：
                </p>
                <ul>
                    <li>
                        <em>
                            建议或参与讨论
                        </em>
                        使用等过程中发现的问题或需要改进的部分，包括好的建议和疑惑，都可以提issue进行讨论。
                    </li>
                    <li>
                        <em>
                            代码维护
                        </em>
                        认领issue中确定需要修改的部分，进行代码修改（请推送到dev分支）。
                    </li>
                    <li>
                        <em>
                            文档维护
                        </em>
                        位于docs下的接口API的维护工作，针对描述不准确或需要补充等地方，进行文案修改。
                    </li>
                    <li>
                        <em>
                            用例或作品
                        </em>
                        你可以在项目的demos下添加一些简单的用例，或者建立新的项目开发一个有趣的作品并告知我们。
                    </li>
                </ul>
            </div>
        );
    }
};
