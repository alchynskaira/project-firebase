import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {useAlertContext} from "../../helpers/alertContextProvider";
import Box from "@mui/material/Box";



export default function Loader() {
    const {loading} = useAlertContext();

    return (
        <Box>
            { loading && <CircularProgress />}
        </Box>
    );
}