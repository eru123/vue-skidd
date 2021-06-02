export default {
  install: function (Vue, config) {
    Vue.prototype.$config = config;
  },
};
