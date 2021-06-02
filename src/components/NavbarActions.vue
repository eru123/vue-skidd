<template>
  <v-list
    class="d-flex flex-row"
    nav
    :color="$vuetify.theme.dark ? 'dark' : 'primary'"
  >
    <div v-for="(item, key) in navitems" :key="key">
      <v-list-item v-if="item.type == 'link'" :to="item.to" router exact>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item>
      <v-menu
        v-else-if="menu && item.type == 'menu'"
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            class="ma-0"
          >
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item>
        </template>
        <v-list class="pa-0" dense>
          <div v-for="(i, k) in item.items" :key="k">
            <v-list-item v-if="i.type == 'link'" :to="i.to" router exact>
              <v-list-item-icon>
                <v-icon>
                  {{ i.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ i.title }}
              </v-list-item-title>
            </v-list-item>
          </div>
        </v-list>
      </v-menu>
    </div>
  </v-list>
</template>
<script>
export default {
  name: "NavbarActions",
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
    menu: false,
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
  },
  methods: {
    itemsHandler(items) {
      if (items.length > 0) {
        const navitems = [];
        const menu = [];
        // const more = [];

        items.forEach((item) => {
          if (item.type === "menu") {
            menu.push(item);
            // item.items.forEach((i) => {
            //   menu.push(i);
            // });
          } else if (item.type === "more") {
            // item.items.forEach((i) => {
            //   more.push(i);
            // });
          } else {
            navitems.push(item);
          }
        });

        this.navitems = navitems.concat(menu);
      }
    },
    moreHandler(items) {
      this.itemsHandler(items);
      this.menu = items.length > 0;
    },
  },
};
</script>
