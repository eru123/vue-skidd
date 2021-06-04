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
      {
        path: "/about",
        name: "About",
        component: Home,
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
