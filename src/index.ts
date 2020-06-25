// 引入样式文件，用于清除浏览器默认样式
import './assets/css/cssreset-min.css'
import Vue from 'vue'
import router from './router'
// @ts-ignore
import App from './App.vue'

Vue.config.productionTip = false

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
