import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/messaging";

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
    messaging: firebase.messaging(),
  };
};

const helper = (firebaseInstance) => {
  const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
  const arrayRemove = firebase.firestore.FieldValue.arrayRemove;

  const login = async (email, pass) => {
    return await firebaseInstance.auth.signInWithEmailAndPassword(email, pass);
  };

  const register = async (email, pass) => {
    return await firebaseInstance.auth.createUserWithEmailAndPassword(
      email,
      pass
    );
  };

  const set = async (collection, doc, data, overwrite = false) => {
    return await firebaseInstance.firestore
      .collection(collection)
      .doc(doc)
      .set(data, overwrite ? { merge: true } : {});
  };

  const sendEmailVerification = async () => {
    return await firebaseInstance.auth.currentUser.sendEmailVerification();
  };

  const auth = (callback = null) => {
    return firebaseInstance.auth.onAuthStateChanged(callback);
  };

  const user = () => {
    return firebaseInstance.auth.currentUser;
  };

  const mediaUrl = async (src) => {
    return await firebaseInstance.storage.ref(src).getDownloadURL();
  };

  return {
    user,
    auth,
    login,
    register,
    sendEmailVerification,
    set,
    arrayUnion,
    arrayRemove,
    mediaUrl,
  };
};

export default {
  init,
  helper,
};
