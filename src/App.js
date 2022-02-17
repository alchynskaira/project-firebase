import React from "react";
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {NavBar} from "./components/navBar/NavBar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import{PrivateRoute} from "./components/routs";


function App() {

  return (
    <div className="App">
      <Container >
          <NavBar/>
      <Routes>
          <Route path="/home" element={<PrivateRoute> <HomePage/> </PrivateRoute>} />
           <Route path="login" element={ <LoginPage/>}/>
      </Routes>
      </Container>
    </div>
  );
}

export default App;
