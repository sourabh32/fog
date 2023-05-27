import { createContext, useEffect, useState } from "react";
import { createUserWithGoogleAuth, onAuthStateChangedListner } from "../utils/firebase.utils";

export const userContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
})



export const UserProvider = ({children})=>{
 const [currentUser,setCurrentUser] = useState(null)

 useEffect(() => {
   const unsubscribe = onAuthStateChangedListner((user)=>{
  if(user){
    createUserWithGoogleAuth(user)
  }
  setCurrentUser(user)
   })
 
   return unsubscribe
 }, [])
 
 const value = {currentUser,setCurrentUser}
    return(
        <userContext.Provider value={value}>
         {children}
        </userContext.Provider>
    )
}