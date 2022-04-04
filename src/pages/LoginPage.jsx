import React from "react";
import {LoginForm} from "../components/login/LoginForm";
import {getUserState} from "../helpers/isAuthenticated";

const LoginPage = () => {

    const isAuthenticated = getUserState();

    return (
        <> {!isAuthenticated &&  <LoginForm/>}

        </>
    );
};

export default LoginPage;