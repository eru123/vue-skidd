import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/LayoutHandler"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/Home"),
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("@/views/Home"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
