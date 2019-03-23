import firebase from "firebase"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyD44LzYkYZEz5rgg7ImcQPRfSmPRe1Y4mI",
  authDomain: "jose-afonso-g.firebaseapp.com",
  databaseURL: "https://jose-afonso-g.firebaseio.com",
  projectId: "jose-afonso-g",
  storageBucket: "jose-afonso-g.appspot.com",
  messagingSenderId: "495032438384",
}

class Firebase {
  constructor() {
    firebase.initializeApp(config)
    this.store = firebase.firestore
    this.auth = firebase.auth
  }

  get polls() {
    return this.store().collection("polls")
  }
}

export default new Firebase()
