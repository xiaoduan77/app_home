import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import 'amfe-flexible'
import '@/vant'
import '@/styles/font_3485591_y8a7wtuofm/iconfont.css'
import '@/styles/theme.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
