<template>
  <div>
    <div v-for="(item, key) in items" :key="key">
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
  </div>
</template>
<script>
export default {
  name: "NavbarListParser",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
