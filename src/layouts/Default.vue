<template>
  <g-layout :left="right" :right="right">
    <router-view></router-view>
  </g-layout>
</template>
<script>
export default {
  name: "LayoutDefault",
  data: () => ({
    right: [
      {
        type: "main",
        items: [
          {
            type: "link",
            title: "Home",
            to: "/",
            icon: "fas fa-home",
          },
          {
            type: "link",
            title: "Test",
            to: "/test",
            icon: "fas fa-home",
          },
        ],
      },
      {
        type: "menu",
        icon: "fas fa-caret-down",
        items: [
          {
            type: "link",
            title: "Home",
            to: "/",
            icon: "fas fa-home",
          },
          {
            type: "link",
            title: "Test",
            to: "/test",
            icon: "fas fa-home",
          },
        ],
      },
      {
        type: "more",
        icon: "fas fa-caret-down",
        items: [
          {
            type: "link",
            title: "Home",
            to: "/",
            icon: "fas fa-home",
          },
          {
            type: "link",
            title: "Test",
            to: "/test",
            icon: "fas fa-home",
          },
          {
            type: "link",
            title: "About",
            to: "/about",
            icon: "fas fa-home",
          },
        ],
      },
    ],
  }),
};
</script>
