import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBEPnDX02fc5yjaQXZnMUL9hsh1XTzBkl4",
    authDomain: "bookish-c9240.firebaseapp.com",
    projectId: "bookish-c9240",
    storageBucket: "bookish-c9240.appspot.com",
    messagingSenderId: "1080875457851",
    appId: "1:1080875457851:web:72974042d8e8f4a7bf6b1e",
    measurementId: "G-K8BEQYMBJ0",
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};