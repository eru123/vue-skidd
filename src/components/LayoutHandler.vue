<template>
  <component :is="comps[layout]"> </component>
</template>
<script>
import Default from "@/layouts/Default";
import Plain from "@/layouts/Plain";
export default {
  name: "LayoutHandler",
  props: {
    layout: {
      type: String,
      default: "default",
    },
  },
  data: () => ({
    comps: {
      default: Default,
      plain: Plain,
    },
  }),
};
</script>
