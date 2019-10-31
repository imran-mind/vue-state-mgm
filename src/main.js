import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store/index";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Vue.config.errorHandler = (err) => {
// 	alert(err.message)
// }
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
