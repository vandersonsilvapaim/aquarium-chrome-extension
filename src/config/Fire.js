import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCDwn_hg6E0RvbgDfNg0JETzZjgezFtVfg",
    authDomain: "aquarium-chrome-extension.firebaseapp.com",
    databaseURL: "https://aquarium-chrome-extension.firebaseio.com",
    projectId: "aquarium-chrome-extension",
    storageBucket: "aquarium-chrome-extension.appspot.com",
    messagingSenderId: "314289035237",
    appId: "1:314289035237:web:96ed75fda6978f74da410c",
    measurementId: "G-XNE721Q9QD"
}

const fire = firebase.initializeApp(config)
export default fire
