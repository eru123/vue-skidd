importScripts("./my-env-vars.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");

var firebaseConfig = {
  apiKey: VUE_APP_FIREBASE_APIKEY,
  authDomain: VUE_APP_FIREBASE_AUTHDOMAIN,
  projectId: VUE_APP_FIREBASE_PROJECTID,
  storageBucket: VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: VUE_APP_FIREBASE_APPID,
  measurementId: VUE_APP_FIREBASE_MEASUREMENTID,
};

const app = firebase.initializeApp(firebaseConfig);

app
  .messaging()
  .getToken({ vapidKey: VUE_APP_PUSHKP })
  .then((currentToken) => {
    if (currentToken) {
      console.log("client token", currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });
