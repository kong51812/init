import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


//插件区
import md5 from 'js-md5'; //MD5加密
Vue.prototype.$md5 = md5;


//自定义全局插件
import * as custom from './plugins/Gfilters'
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})
import Gfunction from './plugins/Gfunction' //全局function
Vue.use(Gfunction)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')