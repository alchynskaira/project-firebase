import React from "react";
import {Container} from "@mui/material";
import {Login} from "./components/login/Login";
import {NavBar} from "./components/navBar/NavBar";


function App() {
  return (
    <div className="App">
      <Container >
          <NavBar/>
          <Login/>
      </Container>

    </div>
  );
}

export default App;
