const Counting = require("../lib/Counting");

export default {
  install: function (Vue) {
    Vue.prototype.$uuid = new Counting();
  },
};
