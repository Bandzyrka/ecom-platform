import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { User, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { Collection } from "../redux/shop/shop.types";
const config = {
  apiKey: "AIzaSyCF-1vmRYeLDRFt6MwHQnXozw5wEYKtIEA",
  authDomain: "ecom-d479d.firebaseapp.com",
  projectId: "ecom-d479d",
  storageBucket: "ecom-d479d.appspot.com",
  messagingSenderId: "1095869390094",
  appId: "1:1095869390094:web:700d186e71e4f86ad3cb5f",
  measurementId: "G-7Q8VW6KQLB",
};

export type AdditionalData = {
  displayName?: string;
};
export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserProfileDocument = async (
  userAuth: User,
  additionalData = {} as AdditionalData
): Promise<void | DocumentData> => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user, ", error);
    }
  }
  return userSnapshot as DocumentData;
};

firebase.initializeApp(config);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const signOutUser = async () => await signOut(auth)

export const convertCollectionsSnapshotToMap = (collections): Collection[] => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
