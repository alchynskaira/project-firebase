import { getAuth } from "firebase/auth";
 export const getUserState = ( )=> {

     const auth = getAuth();

     const user = auth.currentUser;


     return !!user;


};



