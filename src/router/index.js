import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Trap1 from "@/views/Trap1.vue";
import Trap2 from "@/views/Trap2.vue";
import Trap3 from "@/views/Trap3.vue";
import Trap4 from "@/views/Trap4.vue";
import Trap5 from "@/views/Trap5.vue";
import Trap6 from "@/views/Trap6.vue";
import Trap6_1 from "@/views/Trap6.1.vue";
import Trap7 from "@/views/Trap7.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/trap1", name: "trap1", component: Trap1 },
  { path: "/trap2", name: "trap2", component: Trap2 },
  { path: "/trap3", name: "trap3", component: Trap3 },
  { path: "/trap4", name: "trap4", component: Trap4 },
  { path: "/trap5", name: "trap5", component: Trap5 },
  { path: "/trap6", name: "trap6", component: Trap6 },
  { path: "/trap6.1", name: "trap6.1", component: Trap6_1 },
  { path: "/trap7", name: "trap7", component: Trap7 },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
