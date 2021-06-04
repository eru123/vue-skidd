<template>
  <router-view />
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  created() {
    this.$store.commit("isAuthLoaded", false);

    this.$fire.helper.auth((user) => {
      // first load only
      if (!this.isAuthLoaded) {
        this.$store.commit("isAuthLoaded", true);
      }
      this.$store.dispatch("user", user);
      this.$store.commit("authenticated", user ? true : false);
      // if(user) {
      // 	//
      // } else {
      // 	//
      // }
    });
  },
  computed: {
    ...mapState(["isAuthLoaded"]),
  },
};
</script>
