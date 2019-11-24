<template>
  <div>
    <header
      ref='header'
      id='topHeader'
    >
      <h2>image2D</h2>
      <ul>
        <li
          onclick='window.location.href="#/guide/"'
          id='guide'
        >开始</li>
        <li
          onclick='window.location.href="#/api/"'
          id='api'
        >文档</li>
        <li>
          <a
            href="https://yelloxing.github.io/Image-Demo/index.html"
            target="_blank"
          >例子</a>
        </li>
        <li
          onclick='window.location.href="#/about/"'
          id='about'
        >关于</li>
        <li>
          <a
            href="https://github.com/yelloxing/image2D/issues"
            target="_blank"
          >帮助</a>
        </li>
      </ul>
      <a
        href="https://github.com/yelloxing/image2D"
        class="github"
        target="_blank"
      >Fork me on Github
      </a>
    </header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <ul>
        <li>
          <a href="#/guide/">开始</a>
        </li>
        <li>
          <a href="#/api/">文档</a>
        </li>
        <li>
          <a
            href="https://yelloxing.github.io/Image-Demo/index.html"
            target="_blank"
          >例子</a>
        </li>
        <li>
          <a href="#/about/">关于</a>
        </li>
        <li>
          <a
            href="https://github.com/yelloxing/image2D/issues"
            target="_blank"
          >帮助</a>
        </li>
      </ul>
      Copyright © 2007 - 2019
      <em>走一步 再走一步</em>
      <a
        href="javascriot:void(0)"
        @click='toTop()'
      >回到顶部</a>
    </footer>
  </div>
</template>

<script>
import $$ from "image2d";

export default {
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
    doScroll() {
      let toTop = document.documentElement.scrollTop || document.body.scrollTop;

      // 控制标题头
      if (toTop <= 130)
        this.$refs.header.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      else this.$refs.header.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    }
  },
  mounted() {
    window.addEventListener("scroll", this.doScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.doScroll);
  }
};
</script>

<style lang="scss" scoped>
div {
  --distance: calc(50vw - 5.5rem);

  & > * {
    min-width: 11rem;
  }

  // 头部
  & > header {
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.4);
    line-height: 0.42rem;
    color: rgb(113, 30, 50);
    padding-left: var(--distance);
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
    & > .github {
      position: fixed;
      transform: rotate(45deg);
      top: 0.6rem;
      line-height: 1.6em;
      right: -0.6rem;
      background-color: #ac2c23;
      outline: 0.04rem solid #ac2c23;
      transform-origin: 1.5rem 0.23rem;
      border: 0.02rem dashed #d14742;
      width: 3rem;
      text-align: center;
      color: #ebdbd9;
      font-family: sans-serif;
    }
    * {
      display: inline-block;
    }
    h2 {
      font-size: 0.2rem;
      font-family: fantasy;
      background-image: url("./assets/image2D.png");
      background-position: left center;
      background-size: 0.3rem auto;
      background-repeat: no-repeat;
      padding-left: 0.4rem;
      margin-left: 0.3rem;
    }
    ul {
      padding-right: var(--distance);
      position: absolute;
      right: 1rem;
      li {
        padding: 0 0.05rem;
        font-size: 0.12rem;
        cursor: pointer;
        font-weight: bold;
        &[active="yes"] {
          color: #f10c0c;
          border-bottom: 3px solid red;
        }
        &[active="no"],
        a {
          color: rgb(3, 3, 3);
        }
      }
    }
  }

  // 主体内容
  & > section {
    background-image: url("./assets/header.jpg");
    background-repeat: no-repeat;
    background-position: center -0.1rem;
    padding: 1.8rem var(--distance) 0.1rem;
    margin-top: -0.42rem;
  }

  // 页脚
  & > footer {
    padding: 0.4rem 0.1rem;
    text-align: center;
    background-color: #f6f9fa;
    font-size: 0.12rem;
    & > ul {
      padding-bottom: 0.2rem;
      & > li {
        display: inline-block;
        padding: 0 0.2rem;
        line-height: 1.2em;
        &:not(:last-child) {
          border-right: 1px solid #000;
        }
      }
    }
    a {
      font-weight: bold;
      color: #000;
    }
    & > em {
      font-style: normal;
      font-family: cursive;
    }
  }
}
</style>
