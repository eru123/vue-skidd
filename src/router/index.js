import Vue from "vue";
import VueRouter from "vue-router";

import LayoutHandler from "@/components/LayoutHandler";
import Home from "@/views/Home";
import About from "@/views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LayoutHandler,
    props: {
      layout: "default",
    },
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/test",
        name: "Test",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
