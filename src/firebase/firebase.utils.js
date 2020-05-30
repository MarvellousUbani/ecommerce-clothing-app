import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUuL1yJT3C0_88Urxtigbd1JN8jJxKcjA",
    authDomain: "marvclothing-db.firebaseapp.com",
    databaseURL: "https://marvclothing-db.firebaseio.com",
    projectId: "marvclothing-db",
    storageBucket: "marvclothing-db.appspot.com",
    messagingSenderId: "759344751789",
    appId: "1:759344751789:web:964a46afc23e847049d224",
    measurementId: "G-CJ3DEG0W4P"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
   const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapShot = await userRef.get();


   if(!snapShot.exists){
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
     } catch(error){
        console.log('error creatin user', error.message);
     }
   }

   return userRef
  
  }

  firebase.initializeApp(config);

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    })
    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map( doc => {
      const {title, items} = doc.data();
      
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    } , {});    
  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    })
  }



  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
  

  export default firebase;