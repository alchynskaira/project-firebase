import React from "react";
import { Navigate } from "react-router-dom";

import {localStorageGetUserState} from "./isAuthenticated";

export const PrivateRoute = ({children}) => {
    const isAuthenticated = localStorageGetUserState();

    return isAuthenticated ? children : <Navigate to="/login" />;
};