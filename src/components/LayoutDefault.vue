<template>
  <g-layout :left="right" :right="right">
    <router-view />
  </g-layout>
</template>
<script>
import GLayout from "@/components/GLayout";
export default {
  components: {
    GLayout,
  },
  data: () => ({
    right: [
      {
        type: "link",
        title: "Home",
        to: "/",
        icon: "fas fa-home",
      },
      {
        type: "menu",
        icon: "fas fa-caret-down",
        items: [
          {
            type: "link",
            title: "Test",
            to: "/test",
            icon: "fas fa-home",
          },
        ],
      },
    ],
  }),
};
</script>
