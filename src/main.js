import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import "@babel/polyfill"; // useBuiltin
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import fire from "./plugins/fire";
import config from "./plugins/config";
import globalComponents from "./plugins/global-components";

Vue.config.productionTip = false;

Vue.use(fire, {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENTID,
});

Vue.use(config, {
  short: process.env.VUE_APP_SHORT,
  title: process.env.VUE_APP_TITLE,
  host: process.env.VUE_APP_HOST,
  version: require("../package.json").version,
});

Vue.use(globalComponents);

new Vue({
  router,
  store,
  vuetify,
  fire,
  render: (h) => h(App),
}).$mount("#app");
