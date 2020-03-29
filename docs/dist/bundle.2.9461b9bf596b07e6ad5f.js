(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{32:function(n,e,t){"use strict";t.r(e);var a=t(70),i=t(41);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);t(60);var v=t(8),s=Object(v.a)(i.default,a.a,a.b,!1,null,"ee94b5b0",null);s.options.__file="src/pages/guide.vue",e.default=s.exports},40:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e){prettyPrint(),1==arguments.length?((0,i.default)("li",document.getElementById("topHeader")).attr("active","no"),(0,i.default)("#"+n).attr("active","yes")):2==arguments.length&&"api"==n&&((0,i.default)("li.apimenu-item",document.getElementById("api-nav")).attr("active","no"),(0,i.default)("#"+e).attr("active","yes"))};var a,i=(a=t(12))&&a.__esModule?a:{default:a}},41:function(n,e,t){"use strict";t.r(e);var a=t(42),i=t.n(a);for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);e.default=i.a},42:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=(a=t(40))&&a.__esModule?a:{default:a};e.default={mounted:function(){(0,i.default)("guide"),document.getElementsByTagName("title")[0].innerText="开始 | image2D"}}},43:function(n,e,t){var a=t(61);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals),(0,t(6).default)("3c926194",a,!1,{})},60:function(n,e,t){"use strict";var a=t(43);t.n(a).a},61:function(n,e,t){e=n.exports=t(5)(!1);var a=t(13)(t(62));e.push([n.i,"div[data-v-ee94b5b0]{font-size:0.14rem}div>.banner[data-v-ee94b5b0]{margin:2em 0;border-left:0.1rem solid #9fc457;font-weight:400;padding:0 0.15rem;background-color:#d5e2ba;line-height:3em;color:#000}div>h2[data-v-ee94b5b0]{margin:0.5rem 0 1.2em}div>h4[data-v-ee94b5b0]{font-size:0.16rem;color:#cb538b}div>p[data-v-ee94b5b0]{font-size:0.16rem;line-height:1.8em;word-spacing:0.05em;color:#757474;text-indent:2em;margin-bottom:0.2rem;margin-top:0.1rem}div>p>a[data-v-ee94b5b0]{color:#9fc457;font-weight:600;margin:0 0.1rem}div .special-class-demo1[data-v-ee94b5b0]{background-image:url("+a+");background-position:right center;background-repeat:no-repeat}\n",""])},62:function(n,e,t){n.exports=t.p+"dist/guider-demo1.png"},70:function(n,e,t){"use strict";function a(){return this.$createElement,this._self._c,this._m(0)}var i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"banner"},[n._v("\n      基于svg和canvas2D提供更友好的二维绘图接口，包括常规的辅助方法！\n    ")]),n._v(" "),t("h2",[n._v("\n      概要\n    ")]),n._v(" "),t("p",[n._v("\n      开发这个库的初衷是希望越来越多的人可以更自由的发挥自己的创意，感受绘图的乐趣，并把积累的经验分享出来，推动库本身的发展，从而不断优化！因此，这个库永远都是自由、开源、讨论和进步的。\n    ")]),n._v(" "),t("p",[n._v("\n        使用这个库可以帮助你更容易的绘制二维图形，同时库本身提供了一些绘图中实用的工具。\n    ")]),n._v(" "),t("p",[n._v("\n      我们欢迎任何人的加入，具体的内容你可以通过访问\n      "),t("a",{attrs:{href:"https://github.com/yelloxing/image2D/blob/master/CONTRIBUTING.md"}},[n._v("贡献指南")]),n._v("\n      来找到你可以参与的部分。任何时候，特别是遇到疑惑，联系\n      "),t("a",{attrs:{href:"mailto:yelloxing@gmail.com"}},[n._v("作者")]),n._v("\n      都会是一个好主意。当然，提\n      "),t("a",{attrs:{href:"https://github.com/yelloxing/image2D/issues"}},[n._v("issue")]),n._v("\n      也是不错的，因为这样更方便大家交流！\n    ")]),n._v(" "),t("h2",[n._v("\n      起步\n    ")]),n._v(" "),t("p",[n._v("\n      具体的使用说明请查看\n      "),t("a",{attrs:{href:"#/api/"}},[n._v("文档")]),n._v("\n      一节，这里为了方便介绍，你需要搭建一个基本的开发环境来跟着我们学习，很简单，你只需要下载最新的\n      "),t("a",{attrs:{download:"image2D.min.js",href:"https://cdn.jsdelivr.net/npm/image2d@1.6.5/build/image2D.min.js"}},[n._v("image2D.min.js")]),n._v("\n      并通过script标签引入即可。\n    ")]),n._v(" "),t("p",[n._v("\n      作为入门，我们这里只是简单的说明一下如何绘图，具体的辅助方法和一些细节在\n      "),t("a",{attrs:{href:"#/api/"}},[n._v("文档")]),n._v("\n      有进行说明，或者你可以提\n      "),t("a",{attrs:{href:"https://github.com/yelloxing/image2D/issues"}},[n._v("issue")]),n._v("\n      进行交流，为了简化，这里不再赘述。\n    ")]),n._v(" "),t("h4",[n._v("\n      获取画笔\n    ")]),n._v(" "),t("p",[n._v("\n      绘图的第一步当然是获取画笔了，画笔分为两种：Canvas2D和SVG，我们来看看具体的代码：\n    ")]),n._v(" "),t("pre",{staticClass:"prettyprint lang-js"},[n._v("var painter=$$('#painter').painter();")]),n._v(" "),t("p",[n._v("\n      上面的$$('#painter')返回一个image2D对象，通过ID选择器查找结点，然后调用对象上的painter方法就可以获取画笔了。\n    ")]),n._v(" "),t("p",[n._v("\n      如何判断画笔的类型？如果结点是canvas获取的就是Canvas2D画笔，如果结点是svg获取的就是SVG画笔。\n    ")]),n._v(" "),t("h4",[n._v("\n      配置\n    ")]),n._v(" "),t("p",[n._v("\n      不管是什么画笔，都一样可以进行配置（当然有缺省值），比如画笔的粗细，颜色等，下面列出部分选项：\n    ")]),n._v(" "),t("pre",{staticClass:"prettyprint lang-js"},[n._v('painter.config({\n\n    "font-size":文字大小,\n\n    "lineWidth":线条宽度,\n\n    ......\n});')]),n._v(" "),t("p",[n._v("\n      具体的配置选项请查看\n      "),t("a",{attrs:{href:"#/api/painter"}},[n._v("画笔")]),n._v("\n      一节。\n    ")]),n._v(" "),t("h4",[n._v("\n      绘图方法\n    ")]),n._v(" "),t("p",[n._v("\n      画笔获取并配置好了以后，直接调用画笔上的方法即可绘图，我们拿canvas举例子。\n    ")]),n._v(" "),t("pre",{staticClass:"prettyprint lang-js special-class-demo1"},[n._v('$$(\'canvas\')\n.attr({\n    "with":200,\n    "height":100\n})\n.painter()\n.config({\n    "lineWidth":10,\n    "fillStyle":"red",\n    "strokeStyle":"green"\n})\n.fillArc(100, 0, 50, 100, 0, Math.PI)\n.strokeArc(100, 0, 50, 95, 0, Math.PI);')]),n._v(" "),t("p",[n._v("\n      具体的绘图方法也请查看\n      "),t("a",{attrs:{href:"#/api/"}},[n._v("文档")]),n._v("\n      一节中关于画笔的部分。\n    ")]),n._v(" "),t("p",[n._v("\n      怎么样？是不是很简单，虽然直接使用canvas或svg也可以实现，不过借助这个库绘图会更简单，你可以把更多的精力放在绘制出更有趣的作品上（如果借助本库开发了有趣的作品，可以联系我们，和大家一起分享）。\n    ")]),n._v(" "),t("p",[n._v("\n      最后，祝你好运！\n    ")]),n._v(" "),t("h2",[n._v("\n      下一步\n    ")]),n._v(" "),t("p",[n._v("\n      请务必查看\n      "),t("a",{attrs:{href:"#/api/"}},[n._v("这个文档")]),n._v("\n      。在这里，你将找到所有的接口文档，包括一些必要的说明和重要的使用用例。这里还有一个方便的\n      "),t("a",{attrs:{href:"https://github.com/yelloxing/image2D/issues"}},[n._v("问题交流")]),n._v("\n      的部分，你可以把你使用的后的改进意见反馈给我们，或者在这里提出使用疑惑。\n    ")])])}];a._withStripped=!0,t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}))}}]);