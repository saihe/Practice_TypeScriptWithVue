import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import BalanceList from "../views/BalanceList.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: BalanceList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
