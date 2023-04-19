import Vue from "vue";
import VueRouter from "vue-router";
import { Global } from "./Stores";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { user } = Global.state;
  if (to.meta.requiresAuth && !user) {
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
