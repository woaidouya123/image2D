<template>
  <div>
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
        使用等过程中发现的问题或需要改进的部分，包括好的建议和疑惑，都可以提
        <a href="https://github.com/yelloxing/image2D/issues">issue</a>
        进行讨论。
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
        你可以在
        <a href="https://yelloxing.github.io/Image-Demo/index.html#/menu">Image Demo</a>
        项目中
        <a href="https://github.com/yelloxing/Image-Demo">添加用例</a>
        ，或者在
        <a href="https://github.com/image2D">图表组件</a>
        中添加你的作品。
      </li>
    </ul>
  </div>
</template>

<script>
import update from "../service/update";

export default {
  mounted() {
    update("about");
     document.getElementsByTagName('title')[0].innerText='关于 | image2D';
  }
};
</script>

<style lang="scss" scoped>
div {
  & > h2 {
    font-weight: 800;
    line-height: 2em;
    padding: 0.4rem 0 0.2rem;
    margin-top: -0.3rem;
    font-size: 0.2rem;
  }
  & > p {
    padding: 0.1rem;
    font-size: 0.14rem;
    font-weight: 800;
    & > a {
      color: #9fc457;
      font-weight: 600;
      margin: 0 0.1rem;
    }
  }
  & > ul {
    & > li {
      margin-left: 0.3rem;
      line-height: 2.5em;
      margin: 0.1rem 0;
      font-size: 0.13rem;
      & > a {
        color: #9fc457;
        font-weight: 600;
        margin: 0 0.1rem;
      }
      & > em {
        background-color: #8eb844;
        margin: 0 0.1rem;
        padding: 0.03rem;
        font-size: 0.12rem;
        font-style: normal;
        color: #fefdf7;
      }
    }
  }
}
</style>
