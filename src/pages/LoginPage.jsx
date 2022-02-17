import React from "react";
import {LoginForm} from "../components/login/LoginForm";
import {localStorageGetUserState} from "../components/isAuthenticated";

const LoginPage = () => {

    const isAuthenticated = localStorageGetUserState();

    return (
        <> {!isAuthenticated &&  <LoginForm/>}

        </>
    );
};

export default LoginPage;