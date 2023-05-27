
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,signInWithPopup,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCAg7ncaeVzXb5VBvo4EWs_w0Ttewxw6DU",
  authDomain: "fogg-492fa.firebaseapp.com",
  projectId: "fogg-492fa",
  storageBucket: "fogg-492fa.appspot.com",
  messagingSenderId: "255420143012",
  appId: "1:255420143012:web:102b9125ebe04d81d19d31"
};


const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt:'select_account'
});


export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);


const db = getFirestore()


export const createUserWithGoogleAuth = async (userAuth,additionalInfo ={}) =>{
  if(!userAuth){
    return;
  }
const userDocRef = doc(db,"user",userAuth.uid)
const userSnapshot = await getDoc(userDocRef)
if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date()
  try{
    await setDoc(userDocRef,{
        displayName:displayName,
        email:email,
        createdAt:createdAt,
        ...additionalInfo
    })
  }
  catch (err){
    console.log(err.message)
  }
}
return userDocRef
}




export const createAuthUserWithEmailAndPassword = async  (email,password)=>{
  if(!password || !email ){
    return;
  }
  return await createUserWithEmailAndPassword(auth,email,password)
}




export const signInUserWithEmailandPassword = async (email,password)=>{
  return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () => await signOut(auth)


export const onAuthStateChangedListner = (callback) =>{
  return onAuthStateChanged(auth,callback)
}






