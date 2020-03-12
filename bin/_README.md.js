const fs = require('fs');

module.exports = function (url,componentName) {

    fs.writeFileSync(url,`# 🍇 `+componentName+`
基于[image2D](https://github.com/yelloxing/image2D)开发的前端图表组件。

[![downloads](https://img.shields.io/npm/dm/`+componentName+`.svg)](https://yelloxing.github.io/npm-downloads?interval=7&packages=`+componentName+`)
[![install size](https://packagephobia.now.sh/badge?p=`+componentName+`)](https://packagephobia.now.sh/result?p=`+componentName+`)
[![Version](https://img.shields.io/npm/v/`+componentName+`.svg)](https://www.npmjs.com/package/`+componentName+`)

## 如何使用

首先，我们需要引入image2D和该组件：

\`\`\`bash
npm install --save image2d `+componentName+`
\`\`\`

引入以后，就可以使用了：

\`\`\`js
import $$ from 'image2d';
import component from '`+componentName+`';

// 传入image2D和该组件配置
component($$,config);
\`\`\`

`);

};