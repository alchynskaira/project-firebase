import React, {useState} from "react";
import {Alert} from "@mui/material";


export default function  FlashMessage ({message, type, isOpen})  {


    return (
        <Alert severity={type} open={isOpen} message={message} autoHideDuration={3000}>{message}</Alert>
    );
}