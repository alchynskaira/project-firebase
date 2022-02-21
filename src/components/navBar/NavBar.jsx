
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {NavLink} from "react-router-dom";
import "./NavBar.css";
import React from "react";
import { getUserState} from "../isAuthenticated";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";


export  function NavBar() {
     const navigate = useNavigate();
     const isAuthenticated =  getUserState();

     const handleLogoutClick = () => {
         const auth = getAuth();
         signOut(auth).then(() => {
             getUserState(false) && localStorage.clear();
             navigate("/login");
         }).catch((error) => {
             console.log(error);
         });


     };

    return (
        <Box className="nav-box" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="tool-bar">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    {isAuthenticated && (
                        <NavLink  exact="true" to="/home" className="navLink">
                            Home
                        </NavLink>
                    )}
                    {!isAuthenticated && (
                        <NavLink to="/login" className="navLink" >
                            Login
                        </NavLink>
                    )}
                    {isAuthenticated && (
                    <Button onClick={handleLogoutClick} color="inherit" className="logout-btn logout">Log out</Button>
                    )}
                    {!isAuthenticated && (
                        <Button onClick={handleLogoutClick} color="inherit" className="logout-btn logout">Sign up</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
