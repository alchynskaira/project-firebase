import React, {useEffect} from "react";
import {Container} from "@mui/material";
import {Route, Routes, useNavigate} from "react-router-dom";
import {NavBar} from "./components/navBar/NavBar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import{PrivateRoute} from "./components/routs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {saveUser} from "./components/helpers/saveUser";





function App() {
    let navigate = useNavigate();

    useEffect(()=> {
        const auth = getAuth();

        console.log("123");
        onAuthStateChanged(auth, (user) => {
            if (user) {
               saveUser(user, navigate);

            } else {
                console.log("user is not logged in");
            }
    });

}, []);
  return (
    <div className="App">
      <Container >
          <NavBar/>
      <Routes>
          <Route path="home" element={<PrivateRoute> <HomePage/> </PrivateRoute>} />
           <Route path="login" element={ <LoginPage/>}/>
      </Routes>
      </Container>
    </div>
  );
}

export default App;
