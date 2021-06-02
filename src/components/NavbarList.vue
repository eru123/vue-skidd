<template>
  <v-list v-if="navitems" dense nav>
    <div v-for="(item, key) in navitems" :key="key">
      <!-- Link -->
      <v-list-item v-if="item.type == 'link'" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Subheader  -->
      <v-subheader v-else-if="item.type == 'header' && item.title">
        {{ item.title }}
      </v-subheader>

      <!-- Divider  -->
      <v-divider v-else-if="item.type == 'divider'" />

      <!-- Component  -->
      <div v-else-if="item.type == 'component' && item.component">
        <component :is="item.component" />
      </div>
    </div>
  </v-list>
</template>
<script>
export default {
  name: "NavbarList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    more: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    navitems: [],
    mobile: null,
  }),
  watch: {
    items: {
      handler: "itemsHandler",
      immediate: true,
    },
    more: {
      handler: "moreHandler",
      immediate: true,
    },
    "$vuetify.breakpoint.mdAndDown": {
      handler: "breakpointHandler",
      immediate: true,
    },
  },
  methods: {
    itemsHandler(items) {
      if (items.length > 0) {
        const navitems = [];
        const more = [];

        items.forEach((item) => {
          if (item.type === "more") {
            item.items.forEach((i) => {
              more.push(i);
            });
          } else {
            navitems.push(item);
          }
        });

        this.navitems = navitems.concat(more);
      }
    },
    moreHandler(moreItems) {
      moreItems.forEach(({ type, items }) => {
        if (type === "more") {
          this.itemsHandler(items);
          return;
        }
      });
    },
    breakpointHandler(mobile) {
      this.mobile = mobile;
    },
  },
};
</script>
