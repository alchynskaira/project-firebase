import React from "react";
import { Navigate } from "react-router-dom";

import {getUserState} from "../helpers/isAuthenticated";

export const PrivateRoute = ({children}) => {
    const isAuthenticated = getUserState();

    return isAuthenticated ? children : <Navigate to="/login" />;
};