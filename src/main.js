import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false

// Vue.config.errorHandler = (err) => {
// 	alert(err.message)
// }
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
