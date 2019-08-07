import Vue from "vue";
import Router from "vue-router";
import homeContainer from './components/homeContainer.vue';
import memberContainer from './components/memberContainer.vue';
import shopCarContainer from './components/shopCarContainer.vue';
import searchContainer from './components/searchContainer.vue';
import newsList from './components/home/newsList.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect:'/home'
    },
    {
      path: "/home",
      name: "home",
      component: homeContainer
    },
    {
        path: "/member",
        name: "member",
        component: memberContainer
    },
    {
        path: "/shopCar",
        name: "shopCar",
        component: shopCarContainer
    },
    {
        path: "/search",
        name: "search",
        component: searchContainer
    },
    {
        path: "/home/newsList",
        name: "newsList",
        component: newsList
    },
  ]
});
