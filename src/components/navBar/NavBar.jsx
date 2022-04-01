
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
 import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {NavLink, Link} from "react-router-dom";
import React, {useState} from "react";
import { getUserState} from "../isAuthenticated";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from '@mui/icons-material/Logout';
import "./NavBar.css";


export  function NavBar() {
     const navigate = useNavigate();
     const isAuthenticated =  getUserState();

    const [isLoading, setIsLoading] = useState(false);

     const handleLogoutClick = () => {
         const auth = getAuth();
         signOut(auth).then(() => {
              localStorage.clear();
             navigate("/login");
             setIsLoading(true);
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
                    {isAuthenticated && isLoading &&  (
                        <NavLink  exact="true" to="/home" className="navLink">
                            Home
                        </NavLink>
                    )}
                    {!isAuthenticated  && isLoading &&  (
                        <NavLink   to="/register" className="navLink">
                            Sign up
                        </NavLink>
                    )}
                    {!isAuthenticated &&  (
                        <NavLink to="/login" className="navLink" >
                            Login
                        </NavLink>
                    )}
                    {isAuthenticated &&  (
                    <Button  onClick={handleLogoutClick} color="inherit" className="logout-btn logout"><LogoutIcon /></Button>
                    )}
                    {isAuthenticated && ( <Link to="/profile" className="navLink" >
                        <AccountBoxIcon className="icon-profile"/>
                    </Link>)}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
