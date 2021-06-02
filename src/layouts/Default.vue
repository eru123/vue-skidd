<template>
  <g-layout :left="right" :right="right">
    <template #default>
      <router-view></router-view>
    </template>
  </g-layout>
</template>
<script>
export default {
  name: "LayoutDefault",
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
