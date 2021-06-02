import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export default {
  install: function (Vue) {
    const globalComponents = require.context(
      "@/global-components",
      false,
      /[\w]+\.vue$/
    );

    globalComponents.keys().forEach((fileName) => {
      const componentConfig = globalComponents(fileName);
      const componentName = upperFirst(
        camelCase(fileName.replace("/^.//", "").replace(/\.\w+$/, ""))
      );
      Vue.component(componentName, componentConfig.default || componentConfig);
    });
  },
};
