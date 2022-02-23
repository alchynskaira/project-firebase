export const getUserState = ( )=> {
     const token = localStorage.getItem("token");
     return !!token;
};



