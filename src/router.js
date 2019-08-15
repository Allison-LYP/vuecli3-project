import Vue from "vue";
import Router from "vue-router";
import homeContainer from './components/homeContainer.vue';
import memberContainer from './components/memberContainer.vue';
import shopCarContainer from './components/shopCarContainer.vue';
import searchContainer from './components/searchContainer.vue';
import newsList from './components/home/newsList.vue';
import photoList from './components/home/photoList.vue';
import photoInfo from './components/home/photoInfo.vue';
import goodsList from './components/home/goodsList.vue';
import goodInfo from './components/home/goodInfo.vue';

Vue.use(Router);

export default new Router({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect:'/home'
    },
    {
      path: "/home",component: homeContainer
    },
    {

        path: "/home/newsList",component: newsList
    },
    {
        path: "/home/photoList",component: photoList
    },
    {
        path: "/home/photoList/photoInfo",component: photoInfo
    },
    {
        path: "/home/goodsList",component: goodsList
    },
    {
        path: "/home/goodInfo/:id",component: goodInfo
    },
    {
        path: "/member",component: memberContainer
    },
    {
        path: "/shopCar",component: shopCarContainer
    },
    {
        path: "/search",component: searchContainer
    },
  ]
});
