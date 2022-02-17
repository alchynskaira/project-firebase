
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {NavLink} from "react-router-dom";


import "./NavBar.css";
import React from "react";
import { localStorageGetUserState} from "../isAuthenticated";
import { useNavigate } from "react-router-dom";


export  function NavBar() {
     const navigate = useNavigate();
     const isAuthenticated =  localStorageGetUserState();

     const handleLogoutClick = () => {
         localStorageGetUserState(false) && localStorage.removeItem("isAuthenticated");
         navigate("/login");
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
                </Toolbar>
            </AppBar>
        </Box>
    );
}
