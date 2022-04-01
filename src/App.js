import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "./components/navBar/NavBar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import { PrivateRoute } from "./components/routs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { saveUser } from "./components/helpers/saveUser";
import ProfilePage from "./pages/Profile";
import { AlertContextProvider } from "./components/helpers/alertContextProvider";



function App() {
  let navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        saveUser(user);

      } else {
        navigate("/login");
        console.log("user is not logged in");
      }
    });

  }, []);

  return (
    <div className="App">
      <AlertContextProvider>
        <Container>
          <NavBar />
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          </Routes>
        </Container>
      </AlertContextProvider>
    </div>
  );
}

export default App;
