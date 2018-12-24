# element

> 项目为element初始化模板，加入了全局过滤器，全局function，sass，axios，路由，vuex，md5等；

 * element：按需加载，配置文件 src/plugins/element.js;
 * 全局函数：已经挂载全局，调用方法 `this.test（）`  即可；配置文件 src/plugins/Gfunction.js;
 * 全局过滤器：已经挂载全局，调用方法 {test | GFtest}  配置文件 src/plugins/Gfilters.js;
 * 输出文件地址为相对路径 （./）配置文件 vue.config.js；
 * vuex state中的变量在组件中用 `this.$store.state.变量名 `

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
