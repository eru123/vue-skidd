import Vue from "vue";
import VueRouter from "vue-router";
import LayoutHandler from "@/components/LayoutHandler";
import Home from "@/views/Home";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LayoutHandler,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LayoutHandler,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
