<template>
  <v-app>
    <v-navigation-drawer v-if="Boolean(left)" app left clipped fixed>
      <navbar-list :items="left" />
    </v-navigation-drawer>
    <v-navigation-drawer v-if="Boolean(right)" app right clipped fixed>
      <navbar-list :items="right" />
    </v-navigation-drawer>

    <!-- appbar computer -->
    <v-app-bar
      app
      dark
      clipped-left
      clipped-right
      :color="$vuetify.theme.dark ? 'dark' : 'primary'"
      elevate-on-scroll
    >
      <v-toolbar-title @click="$router.push('/')" v-text="$config.short" />
      <v-spacer />
      <navbar-actions :items="left" />
      <v-spacer />
      <navbar-actions :items="right" />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import NavbarActions from "./NavbarActions.vue";
import NavbarList from "./NavbarList.vue";
export default {
  props: {
    left: {
      type: Array,
      default: null,
    },
    right: {
      type: Array,
      default: null,
    },
  },
  components: { NavbarActions, NavbarList },
  name: "GLayout",
};
</script>
