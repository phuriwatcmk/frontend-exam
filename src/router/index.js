import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Function1 from "../views/Function1.vue";
import Function2 from "../views/Funciton2.vue";
import Function3 from "../views/Function3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/function1",
    name: "Function1",
    component: Function1,
  },
  {
    path: "/function2",
    name: "Function2",
    component: Function2,
  },
  {
    path: "/function3",
    name: "Function3",
    component: Function3,
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Pokemon.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
