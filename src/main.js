import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Photoswipe from 'vue-pswipe';

Vue.config.productionTip = false;
Vue.use(Photoswipe);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
