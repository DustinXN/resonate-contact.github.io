import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/user-contact"
    },
    {
      path: "/user-contact",
      name: "User Contact",
      component: () => import("@/views/UserContact")
    },
    {
      path: "/coming-soon",
      name: "Coming soon",
      component: () => import("@/views/ComingSoon")
    },
    {
      path: "*",
      component: () => import("@/views/NotFound")
    }
  ]
});
