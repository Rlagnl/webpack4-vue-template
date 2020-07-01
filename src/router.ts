// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";
const home = () => import(/* webpackChunkName: "home" */ './views/home.vue')

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    }
  ]
});