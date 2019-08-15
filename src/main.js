import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
// axios.defaults.baseURL = 'http://192.168.0.110:8080';

// 引入缩略图依赖
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
