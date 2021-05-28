import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

const init = function (config) {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  return {
    auth: firebase.auth(),
    database: firebase.database(),
    firestore: firebase.firestore(),
    storage: firebase.storage(),
  };
};

export default {
  // Your web app's Firebase configuration
  // const config = {
  //   apiKey,
  //   authDomain,
  //   databaseURL,
  //   projectId,
  //   storageBucket,
  //   messagingSenderId,
  //   appId,
  //   measurementId,
  // }
  install: function (Vue, config) {
    Vue.prototype.$fire = init(config);
  },
};
