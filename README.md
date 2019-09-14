# 🍇 image2D
使用ECMAScript绘制二维图片。📊📈🎉 Drawing Two-Dimensional Pictures Using ECMAScript.

<a href="https://yelloxing.github.io/npm-downloads?interval=7&packages=image2d"><img src="https://img.shields.io/npm/dm/image2d.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/image2d"><img src="https://img.shields.io/npm/v/image2d.svg" alt="Version"></a>
<a href="https://github.com/yelloxing/image2D/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/image2d.svg" alt="License"></a>
<a class="badge-link" href="https://snyk.io.cnpmjs.org/test/npm/image2d" target="_blank"><img title="Known Vulnerabilities" src="https://snyk.io.cnpmjs.org/test/npm/image2d/badge.svg"></a>

> 目前项目处于RFC阶段，对未来版本有任何改进意见的，都可以在[RFC issue](https://github.com/yelloxing/image2D/issues/18)中讨论交流，如果你想使用image2D绘制一些图形和别人分享（比如RFC中希望引用例子），你可以在[Image Demo](https://github.com/yelloxing/Image-Demo)中参与用例开发，用例的在线访问地址是[Image Demo Inline](https://yelloxing.github.io/Image-Demo/index.html#/menus/line)。

- 另外，本项目加入了[开源中国](https://www.oschina.net/p/image2d)并在其开源，欢迎大家关注。

## Documentation
使用中可以访问[在线接口文档](https://yelloxing.github.io/image2D/)，如果想参与进来，可以访问[开发需知](https://github.com/yelloxing/image2D/blob/master/CONTRIBUTING.md)，如果对未来版本有自己的想法，可以点击[RFC](https://github.com/image-foundation/image2D.RFC)进行交流。

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/yelloxing/image2D/issues)！

## How to use?
如果你开发的是一个web项目，直接在页面引入打包后的文件后即可（在代码中通过image2D或$$调用）：

```html
<script src="./build/image2D.min.js" type="text/javascript"></script>
```

如果你想通过npm方式管理，首先你需要通过命令行安装image2D，就像这样：

```bash
npm install --save image2d
```

安装好了以后，在需要的地方引入即可：

```js
import $$ from 'image2d';
```

或

```js
const $$ = require("image2d");
```

## License

[MIT](https://github.com/yelloxing/image2D/blob/master/LICENSE)

Copyright (c) 2007夏-present 走一步 再走一步
