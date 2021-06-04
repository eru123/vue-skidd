<template>
  <v-list
    class="d-flex flex-row"
    nav
    :color="$vuetify.theme.dark ? 'dark' : 'primary'"
  >
    <div class="d-flex flex-row" v-for="(g, gk) in items" :key="gk">
      <div class="d-flex flex-row" v-if="g.type == 'main'">
        <div
          class="d-flex flex-row"
          v-for="(l, lk) in g.items"
          :key="`${gk}_${lk}`"
        >
          <v-list-item v-if="l.type == 'link'" :to="l.to" router exact>
            <v-icon class="px-2">{{ l.icon }}</v-icon>
          </v-list-item>
        </div>
      </div>

      <v-menu v-else-if="g.type == 'menu'" open-on-hover bottom offset-y>
        <template #activator="{ on, attrs }">
          <v-list-item
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            class="ma-0"
          >
            <v-icon class="px-2"> {{ g.icon }} </v-icon>
          </v-list-item>
        </template>
        <v-list class="pa-0" dense>
          <list-parser :items="g.items" />
        </v-list>
      </v-menu>
    </div>
  </v-list>
</template>
<script>
import ListParser from "@/components/NavbarListParser";
export default {
  name: "NavbarActions",
  components: {
    ListParser,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    menu: false,
  }),
};
</script>
