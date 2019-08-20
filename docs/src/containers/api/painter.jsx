import React from 'react';
import $$ from 'image2d';

export default class Painter extends React.Component {
    componentDidMount() {
        // 格式化代码
        prettyPrint();

        let lis = document.getElementById('api-nav').getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
            lis[i].setAttribute('active', 'no');
        }

        // 修改菜单状态
        $$('.apimenu-item').attr('active', 'no');
        $$('#painter').attr('active', 'yes');

        // 更新导航菜单信息
        window.image2d_docs_api_navHelper = {
            "small": [],
            "little": [],
            "type": "painter"
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
                画笔是image2D的主体部分，根据当前绑定的结点不同，获取的是不同类型的画笔，目前支持svg和canvas2D画笔：
        </p>
            <pre className='prettyprint lang-js'>var painter=imageObject.painter();</pre>
            <p>
                如果维护的第一个结点是canvas，返回的就是专门在canvas上绘图的位图画笔，svg等别的类似。
        </p>
            <p>
                获取画笔后就可以调用painter上的方法进行绘图了，不过在这之前，你还可以对画笔进行属性（文字大小，颜色等）配置：
        </p>
            <pre className='prettyprint lang-js'>painter.config();</pre>
            <p>
                考虑到属性设置可能有多个或单个，为了方便，提供二种参数类型：
        </p>
            <ul>
                <li>(json):一次配置多个属性，键值对的方式。</li>
                <li>(key, value):对属性key设置为value。</li>
            </ul>
            <p>
                不同画笔的使用大体和上面的类似，差异的部分会在具体的绘图工具下说明，下面我们来看看画笔可配置属性有哪些：
        </p>
            <ul>
                <li>"fillStyle":填充色或图案，默认"#000"。</li>
                <li>"strokeStyle":轮廓色或图案，默认"#000"。</li>
                <li>"lineWidth":线条宽度，默认1(单位px，下同)。</li>
                <li>"textAlign":文字水平对齐方式，默认"left"左对齐（还有"center"居中和"right"右对齐）。</li>
                <li>"textBaseline":文字垂直对齐方式，默认"middle"垂直居中（还有"top"上对齐和"bottom"下对齐）。</li>
                <li>"font-size":文字大小，默认16。</li>
                <li>"font-family":字体，默认"sans-serif"。</li>
                <li>"arc-start-cap":圆弧开始端闭合方式，默认'butt'直线闭合（还有'round'圆帽闭合）。</li>
                <li>"arc-end-cap":圆弧结束端闭合方式，和上一个类似。</li>
            </ul>

            <h4 className="title small">canvas2D</h4>
            <p>
                除了上面列出的可配置项，因为canvas2D的配置是直接连原始画笔的（不是全部），因此其自身的2d画笔原来可配置的属性依旧可以配置，请知悉。这种绘图方法相对比较简单，下面我们来看看其特有的一些简单的绘图方法。
        </p>
            <p className="warn">
                原始画笔的意思是2d上下文，不是我们抽象的painter，因此不同的painter如果管理的是同一个canvas，属性配置不是完全独立的（后面要说明的svg就是独立的）。
        </p>

            <p>把当前绘制的图形变成base64返回：</p>
            <pre className='prettyprint lang-js'>var base64=painter.toDataURL();</pre>

            <p>擦除画布上正方形大小是width*height的区域(正方形左上角坐标(x, y))，x和y默认0，width和height默认就是画布的尺寸，都是可选的：</p>
            <pre className='prettyprint lang-js'>painter.clearRect(x, y, width, height);</pre>

            <p>把图像、画布或视频绘制到画布的指定位置上：</p>
            <pre className='prettyprint lang-js'>painter.drawImage();</pre>
            <ul>
                <li>(img, x, y):在画布上定位图像。</li>
                <li>(img, x, y, width, height):在画布上定位图像，并规定图像的宽度和高度。</li>
                <li>(img, sx, sy, swidth, sheight, x, y, width, height):剪切图像，并在画布上定位被剪切的部分。</li>
            </ul>

            <h4 className="title small">svg</h4>

            <p>
                这种画笔比较特殊，画笔是绑定在维护了svg结点的结点对象上的，不过具体的绘制（比如文字是text标签）却需要对应更具体的标签，因此获取painter方法的时候可以传递一个选择器selector来绑定本次绘制目标（可选）：
        </p>
            <pre className='prettyprint lang-js'>var painter=imageObject.painter(selector);</pre>

            <p>
                因为绘制文字、圆形和圆弧等对应的目标标签不一样，并且一个结点只可以绘制一个图形，因此在每次绘制前都需要明确目标结点：
        </p>
            <pre className='prettyprint lang-js'>painter.bind(selector);</pre>
            <p>
                大部分情况下，selector应该都是模板字符串，比如"&lt;text&gt;"，绘制结束需要追加到svg中去，我们提供了四种追加方法：
        </p>
            <pre className='prettyprint lang-js'>painter.appendTo|prependTo|afterTo|beforeTo(selector);</pre>
            <p>
                因为限制了查找上下文是获取画笔的svg，只需要传递一个参数，具体方法和前面常规的结点操作一样。
        </p>

            <p>
                鉴于svg绘图的特殊性，下面以绘制文字举一个例子来看看绘制整体代码：
        </p>
            <pre className='prettyprint lang-js'>{`// 获取画笔
var painter=$$('svg').painter('<text>');

// 配置画笔
painter.config({
    "fillStyle":"red",
    "font-size":30
});

// 绘制文字并追加到画布
painter.fillText('Step By Step', 100, 100).appendTo('g.text');`}</pre>

            <h4 className="title small">绘图方法</h4>
            <p>
                上面说明的绘图方法都是具体画笔特有的（因为不同的画笔存在差异），除此之外，大部分方法是通用的。
        </p>

            <p>在点(x, y)处绘制填充的文字text；deg表示文字旋转角度，可选：</p>
            <pre className='prettyprint lang-js'>painter.fillText(text, x, y[, deg]);</pre>

            <p>在点(x, y)处绘制轮廓的文字text；deg表示文字旋转角度，可选：</p>
            <pre className='prettyprint lang-js'>painter.strokeText(text, x, y[, deg]);</pre>

            <p>以(cx, cy)为圆心，内外半径分别是r1和r2，从弧度beginDeg开始，跨越弧度deg，绘制填充圆弧：</p>
            <pre className='prettyprint lang-js'>painter.fillArc(cx, cy, r1, r2, beginDeg, deg);</pre>

            <p className="warn">
                除非特别说明，角度全部采用弧度值，这是为了方便记忆，别的地方一样。
        </p>

            <p>和fillArc方法类似，只不过绘制的是轮廓圆弧：</p>
            <pre className='prettyprint lang-js'>painter.strokeArc(cx, cy, r1, r2, beginDeg, deg);</pre>

            <p>以(cx, cy)为圆心，半径r绘制填充圆形：</p>
            <pre className='prettyprint lang-js'>painter.fillCircle(cx, cy, r);</pre>

            <p>以(cx, cy)为圆心，半径r绘制轮廓圆形：</p>
            <pre className='prettyprint lang-js'>painter.strokeCircle(cx, cy, r);</pre>

            <p>以(x, y)为左上角，宽width，高height绘制填充矩形：</p>
            <pre className='prettyprint lang-js'>painter.fillRect(x, y, width, height);</pre>

            <p>以(x, y)为左上角，宽width，高height绘制轮廓矩形：</p>
            <pre className='prettyprint lang-js'>painter.strokeRect(x, y, width, height);</pre>

            <h6 className="title little">路径</h6>
            <p>
                基于路径可以绘制几乎大部分图形，这里独立一小段来说明。
        </p>

            <p>开始一段独立的路径：</p>
            <pre className='prettyprint lang-js'>painter.beginPath();</pre>

            <p>闭合当前路径，也就是路径首尾闭合：</p>
            <pre className='prettyprint lang-js'>painter.closePath();</pre>

            <p>画笔移动到点(x, y)，此时笔离开了画布：</p>
            <pre className='prettyprint lang-js'>painter.moveTo(x, y);</pre>

            <p>画笔移动到点(x, y)，此时笔没有离开画布：</p>
            <pre className='prettyprint lang-js'>painter.lineTo(x, y);</pre>

            <p>二次贝塞尔曲线到：</p>
            <pre className='prettyprint lang-js'>painter.quadraticCurveTo(cpx, cpy, x, y);</pre>
            <p className="warn">
                只有一个控制点p(cpx, cpy),画笔当前的位置和p(x, y)分别的起点和终点。
            </p>

            <p>三次贝塞尔曲线到：</p>
            <pre className='prettyprint lang-js'>painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);</pre>
            <p className="warn">
                有二个控制点p(cp1x, cp1y)和p(cp2x, cp2y),画笔当前的位置和p(x, y)分别的起点和终点。
            </p>

            <p>把当前路径包裹的区域填充颜色：</p>
            <pre className='prettyprint lang-js'>painter.fill();</pre>

            <p>把当前路径上色（轮廓线）：</p>
            <pre className='prettyprint lang-js'>painter.stroke();</pre>
            <h4 className="title small">渐变色</h4>
            <p>
                除了使用纯色填充，还可以使用渐变色作为画笔的颜色，你把它看成普通的颜色使用就可以了。
            </p>
            <h6 className="title little">线性渐变</h6>
            <p>
                首先你需要使用画笔的createLinearGradient创建线性渐变对象，四个参数分别表示渐变的起点P(x1, y1)和终点P(x2, y2)：
            </p>
            <pre className='prettyprint lang-js'>var linearGradient = painter.createLinearGradient(x1, y1, x2, y2);</pre>
            <p className="warn">
                温馨提示：canvas画笔上述参数的单位是px，svg画笔上述参数是%，请一定要注意区分。
            </p>
            <p>
                设置渐变范围以后，你需要在渐变范围中添加渐变色，可以添加任意多个：
            </p>
            <pre className='prettyprint lang-js'>linearGradient.addColorStop(deep, color);</pre>
            <p>
                上述deep取值为闭区间[0, 1]，color可以是任意合法的颜色值。
            </p>
            <p>
                渐变如何使用，直接调用渐变的value方法即可：
            </p>
            <pre className='prettyprint lang-js'>{`painter.config({
    "fillStyle": linearGradient.value()
});`}</pre>
            <p>
                比如上面，我们给画笔设置填充色就是使用了我们刚刚获取的渐变色。
            </p>
            <h4 className="title small">变换</h4>
            <p>
                这里的变换指的是画笔相对画布的变换，和坐标变换不一样，前者改变的是画笔特性，或者是求解点坐标的方法。
            </p>
            <p>
                在说明具体的变换方法前，我们先来看二个与之相关的基本方法。
            </p>
            <h6 className="title little">保存</h6>
            <p>
                保存当前的绘图状态：
            </p>
            <pre className='prettyprint lang-js'>painter.save();</pre>

            <h6 className="title little">恢复</h6>
            <p>
                恢复之前保存的绘图状态：
            </p>
            <pre className='prettyprint lang-js'>painter.restore();</pre>

            <p>
                接着，我们说明几个具体的变换方法。
            </p>
            <h6 className="title little">移动</h6>
            <p>
                把绘图的原点x坐标增加dx，y增加dy：
            </p>
            <pre className='prettyprint lang-js'>painter.translate(dx, dy);</pre>
            <h6 className="title little">旋转</h6>
            <p>
                围绕原点旋转deg：
            </p>
            <pre className='prettyprint lang-js'>painter.rotate(deg);</pre>
            <h6 className="title little">缩放</h6>
            <p>
                x坐标和y坐标分别缩放sx和sy倍（sy缺省取sx）：
            </p>
            <pre className='prettyprint lang-js'>painter.scale(sx[, sy]);</pre>
        </div>);
    }
};
