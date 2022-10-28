// Import the functions you need from the SDKs you need
import * as fs from 'fs';

import { initializeApp } from "firebase/app";
console.log("iiiii")
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYGV7EI7mgVA0nYja_YtZrqi30XRB2Obg",
  authDomain: "newberg-bb090.firebaseapp.com",
  projectId: "newberg-bb090",
  storageBucket: "newberg-bb090.appspot.com",
  messagingSenderId: "959833845643",
  appId: "1:959833845643:web:8eb32594a961100e1a098e",
  measurementId: "G-RCZJNGQJDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);

import { getStorage, ref, getDownloadURL } from "firebase/storage";

// getDownloadURL(ref(storage, 'images/1080_7224527_12_CurbRamp_Sev1.0.jpg'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'
//     console.log(url)

//   })
//   .catch((error) => {
//     console.log(error)
//   });

const dict1 = {
  "7224526": "1080_7224526_13_CurbRamp_Sev1.0",
  "7224527": "1080_7224527_12_CurbRamp_Sev1.0",
  "7224544": "1080_7224544_8_CurbRamp_Sev2.0",
  "7224545": "925_7224545_9_CurbRamp_Sev2.0",
  "7224764": "1164_7224764_14_SurfaceProblem_Sev3.0",
  "7224773": "1080_7224773_11_Obstacle_Sev5.0",
  "7224777": "1080_7224777_10_Obstacle_Sev5.0",
  "7225804": "751_7225804_23_CurbRamp_Sev1.0",
  "7225805": "752_7225805_22_CurbRamp_Sev1.0",
  "7228886": "264_7228886_24_NoCurbRamp_Sev4.0"
}

const dict2={}

// console.log("ahhhh"+dict1["7224526"])


for (const [key, value] of Object.entries(dict1)) {
  // console.log("images/" + value);
  getDownloadURL(ref(storage, 'images/' + value + '.jpg'))
  .then((url) => {
    console.log(url)
  //   dict2.push({
  //     key:   key,
  //     value: url
  // });
  dict2[key]=url
  // console.log(dict2)
  })
  .catch((error) => {
    console.log(error)
  });
}

setTimeout(() => {
  const dictstring = JSON.stringify(dict2)
  fs.writeFile("img.json", dictstring, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("thing.json", "utf8"));
    }
    });
}, 2000)









  