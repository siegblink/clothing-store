import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Declare Firebase configuration.
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
}

// Declare a custom function that will create and save new
//   user data in the database
export async function createUserProfileDocument(userAuth, additionalData) {
  if (!userAuth) {
    return
  }

  // Get the user reference object that contains the
  //   "CRUD" functions that will be used to create new data.
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  // Get the snapshot object that will allow you
  //   to verify if the user already exists in the database.
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    // Create and save new user data in the database.
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef
}

// Initialize the Firebase service.
firebase.initializeApp(config)

// Setup Google authentication to allow account selection.
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

// Save a reference for the Firebase authentication.
export const auth = firebase.auth()

// Save a reference for the Firebase database.
export const firestore = firebase.firestore()

// Declare a custom function that initiates
//   Google authentication.
export const signInWithGoogle = function () {
  auth.signInWithPopup(provider)
}

export default firebase
