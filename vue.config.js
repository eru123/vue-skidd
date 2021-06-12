// const DumpVueEnvVarsWebpackPlugin = require("./vue-config/DumpVueEnvVarsWebpackPlugin.js");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    // plugins: [new DumpVueEnvVarsWebpackPlugin({ filename: "my-env-vars.js" })],
  },
  css: {
    extract: false,
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
  },
  pwa: {
    name: "SKIDD",
    themeColor: "#f1f1f1",
    msTileColor: "#f1f1f1",
    assetsVersion: require("./package.json").version,
  },
  integrity: true,
  devServer: {
    disableHostCheck: true,
  },
};
