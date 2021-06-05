import fire from "@/lib/firebase";

const { init, helper } = fire;

export default {
  /*
    Your web app's Firebase configuration
    const config = {
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId,
    }
  */
  install: function (Vue, config) {
    const firebaseInstance = init(config);

    Vue.prototype.$fire = {
      ...firebaseInstance,
      helper: helper(firebaseInstance),
    };
  },
};
