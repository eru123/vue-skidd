// Vue LocalStorage with event handler implemented

import Vue from "vue";
import store from "store";

const lstoreObj = () => {
  const lstore = new Vue({
    name: "LStore",
  });

  const change = (callback) => lstore.$on("change", callback);
  const each = (callback) => store.each((v, k) => callback(k, v));

  const get = (key = true) => {
    if (key === true) {
      const tmp = {};
      each((k, v) => (tmp[k] = v));
      return tmp;
    } else {
      return store.get(key);
    }
  };

  const set = (key, val) => {
    if (typeof key === "object" && !Array.isArray(key)) {
      for (const k in key) {
        store.set(k, key[k]);
        lstore.$emit("change", k, key[k], "set");
      }
    } else {
      store.set(key, val);
      lstore.$emit("change", key, val, "set");
    }
  };

  const remove = (key) => {
    store.remove(key);
    lstore.$emit("change", key, null, "remove");
  };

  const clear = (map = true) => {
    if (map === true) {
      const items = get();
      items.keys().forEach((key) => remove(key));
      lstore.$emit("change", "affected", items, "clear");
    } else if (Array.isArray(map)) {
      map.forEach((k) => remove(k));
    } else if (typeof map === "string") {
      remove(map);
    } else if (typeof map === "function") {
      change((key, val, type) => {
        if (type === "remove" || type === "clear") {
          map(key, val, type);
        }
      });
    }
  };

  const sync = null;

  return {
    set,
    get,
    each,
    remove,
    clear,
    sync,
    change, // event
  };
};

export default {
  install: function (Vue) {
    Vue.prototype.$lstore = lstoreObj();
  },
};
