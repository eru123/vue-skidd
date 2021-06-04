<template>
  <v-app>
    <!-- sidebar computer -->
    <div v-if="!isMobile">
      <v-navigation-drawer v-if="Boolean(left)" app left fixed>
        <v-card
          :color="$vuetify.theme.dark ? 'dark' : 'primary'"
          :to="{ name: 'Home' }"
          flat
          tile
          dark
          link
          exact
        >
          <v-card-title v-text="title"></v-card-title>
        </v-card>
        <navbar-list :items="left" />
      </v-navigation-drawer>
      <v-navigation-drawer v-if="Boolean(right)" app right clipped fixed>
        <navbar-list :items="right" />
      </v-navigation-drawer>
    </div>

    <!-- sidebar mobile  -->
    <div v-if="isMobile">
      <v-navigation-drawer
        v-if="Boolean(left)"
        v-model="drawer.left"
        app
        left
        fixed
      >
        <navbar-list mobile :items="left" />
      </v-navigation-drawer>
      <v-navigation-drawer
        v-if="Boolean(right)"
        v-model="drawer.right"
        app
        right
        fixed
      >
        <navbar-list mobile :items="right" />
      </v-navigation-drawer>
    </div>

    <!-- appbar computer -->
    <v-app-bar
      v-if="!isMobile"
      app
      dark
      clipped-right
      :color="$vuetify.theme.dark ? 'dark' : 'primary'"
      elevate-on-scroll
    >
      <!-- <v-app-bar-title class="mr-8"  /> -->
      <!-- <v-spacer /> -->
      <navbar-actions v-if="Boolean(left)" :items="left" />
      <v-spacer />
      <navbar-actions v-if="Boolean(right)" :items="right" />
    </v-app-bar>

    <!-- appbar mobile -->
    <v-app-bar
      v-if="isMobile"
      app
      dark
      :color="$vuetify.theme.dark ? 'dark' : 'primary'"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer.left = !drawer.left" />
      <v-toolbar-title
        @click="$router.push({ name: 'Home' })"
        v-text="$config.short"
      />
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer.right = !drawer.right">
        <v-icon>fas fa-ellipsis-v</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapState } from "vuex";
import NavbarActions from "@/components/NavbarActions.vue";
import NavbarList from "@/components/NavbarList.vue";
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
  data: () => ({
    drawer: {
      left: false,
      right: false,
    },
  }),
  computed: {
    ...mapState(["title"]),
  },
  components: { NavbarActions, NavbarList },
  name: "GLayout",
};
</script>
