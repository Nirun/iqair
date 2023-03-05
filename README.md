# iqair arler


## how to setup firebase
npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-xPpkOzAGlTl3ocZrfceWmwQPyg3yJb8",
  authDomain: "iqair-alert.firebaseapp.com",
  projectId: "iqair-alert",
  storageBucket: "iqair-alert.appspot.com",
  messagingSenderId: "29368703043",
  appId: "1:29368703043:web:043eaf9758e38a0617dcf6",
  measurementId: "G-RCEJ1K58F0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

## firebase CLI install
 npm install -g firebase-tools

## firebase login 
 You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.
 Sign in to Google 
... bash
 $ firebase login
... 

 Initiate your project
 Run this command from your app’s root directory: 

... bash
 $ firebase init
... 

 Specify your site in firebase.json
 Add your site ID to the firebase.json configuration file. After you get set up, see the best practices for multi-site deployment. 

 ... bash
{

  "hosting": {

    "site": "iqair",

    "public": "public",

    ...

  }

}
 ...


 When you’re ready, deploy your web app
 Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory: 

 $ firebase deploy --only hosting:iqair