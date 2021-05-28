<template>
  <hello-world />
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
  created() {
    console.log(this.$fire);
  },
};
</script>
