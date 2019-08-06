import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入mint-ui
import { Tabbar, TabItem,Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 引入 MUI
/*import mui from './assets/js/mui';
import './assets/css/mui.min.css';
import './assets/css/icons-extra.css';
Vue.prototype.mui = mui;*/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
