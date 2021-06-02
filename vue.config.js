module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
  css: {
    extract: true,
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
    assetsVersion: "v1",
  },
};
