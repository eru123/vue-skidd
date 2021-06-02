import colors from "vuetify/es5/util/colors";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  defaultAssets: false,
  font: {
    family: "Roboto",
  },
  icons: {
    iconfont: "fa",
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.lightBlue.darken4,
      },
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
});
