// eslint-disable-next-line no-unused-vars
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey: "AIzaSyCF-1vmRYeLDRFt6MwHQnXozw5wEYKtIEA",
  authDomain: "ecom-d479d.firebaseapp.com",
  projectId: "ecom-d479d",
  storageBucket: "ecom-d479d.appspot.com",
  messagingSenderId: "1095869390094",
  appId: "1:1095869390094:web:700d186e71e4f86ad3cb5f",
  measurementId: "G-7Q8VW6KQLB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch( error){
      console.log("Error creating user, ", error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;