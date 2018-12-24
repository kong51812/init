# 概述
> mpvue的初始化模板（mpvue,router,Flyio,Element UI,Vant等）
>
> clone 后去官网下载element与vant的组件库，放在dist文件目录下，路径已在router.js中的注释；
>
> 项目启动后去微信开发者工具中查看效果；

* 第三方组件使用

  * 官网下载第三方组件库，拿出用组件放在dist目录下，路径在router.js中； 
* 路由
  * 跳转 ` this.$router.push(url)`,注意url路径问题；
  * 传参  

```
路由A页面
this.$router.push({
    path: '../b',
    query: {
      id:id,
    }
  });
```

```
路由B页面
onLoad: function (query) {
    query.id
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```