export default {
  install: function (Vue, config) {
    Vue.prototype.$config = config;
    Vue.mixin({
      computed: {
        isMobile() {
          return this.$vuetify.breakpoint.mdAndDown;
        },
      },
      methods: {
        setTitle(title, appTitle = null) {
          document.title = title;
          this.$store.commit("title", appTitle || title);
        },
      },
    });
  },
};
