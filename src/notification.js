import React, {useState} from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";


function Alert(props){
    return <MuiAlert elevation={6}  variant="filled" {...props} />;
}

export  const FlashMessage = ({message}) =>  {
    const [open, setOpen] = useState(true);


    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (


            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={message}>
                <Alert onClose={handleClose} severity="success " sx={{ width: "100%" }}>
                    This is a success message!
                </Alert>
            </Snackbar>

    );
};