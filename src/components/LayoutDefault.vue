<template>
  <g-layout :left="right" :right="right">
    <slot />
  </g-layout>
</template>
<script>
export default {
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
