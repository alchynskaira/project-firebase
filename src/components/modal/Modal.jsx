import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import {EditUserDataForm} from "../editUserForm/EditUserDataForm";
import "./Modal.css";
import {Button} from "@mui/material";



const modalRoot = document.querySelector("#modal-root");

export default function Modal ({onClose, user}) {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.code === "Escape") {
                onClose();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if(e.currentTarget === e.target){
            onClose();
        }
    }

   return createPortal(
       <div className="modal-backdrop" onClick={handleBackdropClick}>
           <div className="modal-content">
               <Button   type="button" className="button-close" onClick={() => onClose(false)}>x
               </Button>
               <EditUserDataForm onClose={onClose} user={user}/>
           </div>
       </div>,
       modalRoot
   );
}