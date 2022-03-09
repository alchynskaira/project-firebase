import React from "react";
import {getUserState} from "../components/isAuthenticated";
import {EditUserDataForm} from "../components/editUserInfo/EditUserData";



const HomePage = () => {

    getUserState();


    return (
        <>
            <EditUserDataForm/>
        </>
    );
};

export default HomePage;