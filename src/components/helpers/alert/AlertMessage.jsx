import React from "react";
import {Alert} from "@mui/material";
import { useAlertContext } from "../alertContextProvider";


export default function  AlertMessage ()  {
    const {alertData} = useAlertContext();

    return (
        <div>
            {alertData.isShown && <Alert variant="outlined" severity={alertData.type}>{alertData.text}</Alert>}
        </div>
    );
}