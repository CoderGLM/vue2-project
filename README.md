# vue2-project

> Vue2.0项目，这个ReadMe是我随便写的，都是隐私，所以你们是不能看的，就不要往下看了，千万不要往下翻，继续浏览其他repo吧。

## 构建设置

``` bash
npm install

# hot reload
npm run dev

# build for production with minification
npm run build

# 单元测试
npm run unit

# 执行所有测试
npm test
```

想知道详情请看[guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 引入sass

``` bash
npm install node-sass sass-loader --save-dev

// webpack.base.conf.js中添加如下节点
/*
  vue: {
    loaders: {
      scss: ['vue-style-loader', 'sass', 'sass'].join('!')
    }
  }
*/

// 在xx.vue中这样使用
/*
<style lang="scss">
$test: big;

h1, h2 {
  font-weight: $test;
}
</style>
*/

```

## 哎，都说了不让你看这个ReadMe，你还是看完了。
