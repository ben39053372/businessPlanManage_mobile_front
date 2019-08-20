import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import { LoadingPlugin ,AlertPlugin, ToastPlugin} from 'vux'
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin , {position: 'middle',text:'请求失败',type:'text'})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
