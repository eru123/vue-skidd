<template>
  <v-list v-if="items" dense nav>
    <div v-for="(g, gk) in items" :key="gk">
      <!-- conditional sidebar items  -->
      <div>
        <!-- mobile only sidebar items  -->
        <div v-if="isMobile">
          <list-parser v-if="g.type == 'main'" :items="g.items" />
          <list-parser v-else-if="g.type == 'mobile'" :items="g.items" />
        </div>
        <!-- computer only sidebar -->
        <div v-else>
          <list-parser v-if="g.type == 'computer'" :items="g.items" />
        </div>
      </div>

      <!-- global and static sidebar items -->
      <div>
        <list-parser v-if="g.type == 'more'" :items="g.items" />
        <list-parser v-else-if="g.type == 'all'" :items="g.items" />
      </div>
    </div>
  </v-list>
</template>
<script>
import ListParser from "@/components/NavbarListParser";
export default {
  name: "NavbarList",
  components: {
    ListParser,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
