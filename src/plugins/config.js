export default {
  install: function (Vue, config) {
    Vue.prototype.$config = config;
    Vue.mixin({
      computed: {
        isMobile() {
          return this.$vuetify.breakpoint.mdAndDown;
        },
      },
    });
  },
};
