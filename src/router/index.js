import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",

    component() {
      return import(/* webpackChunkName: "about" */ "../views/Home.vue");
    },
  },
  {
    path: "/fruit/:id",
    name: "FruitDetails",
    props: true,
    component() {
      return import(
        /* webpackChunkName: "fruitDetail" */ "../views/FruitDetail.vue"
      );
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
