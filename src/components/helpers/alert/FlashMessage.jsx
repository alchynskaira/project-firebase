import React from "react";
import {Alert} from "@mui/material";


export default function  FlashMessage ({message, type, isOpen})  {


    return (
        <Alert variant="filled" severity={type} isOpen={isOpen} message={message} autoHideDuration={3000}>{message}</Alert>
    );
}