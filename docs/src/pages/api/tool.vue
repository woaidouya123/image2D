<template>
  <div class="container">
    <p>因为绘制的时候，比如canvas2D没有图层，某个数据改变可能就意味着需要全部重新绘制等，基于这些考虑，在这一章，对前面进行必要的补充。</p>

    <h4 class="title small">图层</h4>
    <p>首先需要明确，图层服务的对象是canvas2D，svg某种意义上天生具有图层，不需要额外设计。让我们首先看看如何获取一个图层对象：</p>
    <pre class="prettyprint lang-js">var layer=imageObject.layer();</pre>

    <p>这里的图层可以类比photoshop的图层去理解，我们提供了几个类似的方法来帮助使用图层对象。</p>

    <p>图层对象管理着图层，通过传递id可以获取对应图层的画笔，如果该图层不存在会自动创建（这里的画笔就是canvas2D画笔）：</p>
    <pre class="prettyprint lang-js">var painter=layer.painter(id);</pre>

    <p>删除指定图层：</p>
    <pre class="prettyprint lang-js">layer.delete(id);</pre>

    <p>图层中的内容不会显示在画布上，为了显示在画布上，需要手动更新：</p>
    <pre class="prettyprint lang-js">layer.update();</pre>

    <p>隐藏图层：</p>
    <pre class="prettyprint lang-js">layer.hidden(id);</pre>

    <p>显示图层：</p>
    <pre class="prettyprint lang-js">layer.show(id);</pre>
    <p class="nav-footer">
      <a href="#/api/calculate" onclick="document.documentElement.scrollTop = 0;" class="pre">计算</a>
    </p>
  </div>
</template>

<script>
import update from "../../service/update";

export default {
  mounted() {
    update("api", "tool");
  }
};
</script>
