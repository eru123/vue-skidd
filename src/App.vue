<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(process.env);
  },
};
</script>
