import React, { useState} from "react";
import {TextField, Button} from "@mui/material";
import {formValidationLogin, signupValidation} from "../login/formValidation";
import {useNavigate} from "react-router-dom";
import {auth} from "../../index";
import {createUserWithEmailAndPassword} from "firebase/auth";
import  "./Registration.css";
import {saveUser} from "../helpers/saveUser";
import {FlashMessage} from "../helpers/alert/FlashMessage";

let pass = "";

export function RegistrationForm() {
  const navigate = useNavigate();
    const [emailValue, setEmailValue] = useState( "");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmValue, setConfirmValue] = useState("");

    const [errors, setErrors] = useState({
        email: {
            valid: true,
            text: ""
        },
        password: {
            valid: true,
            text: ""
        },
       });
    const [passErrors, setPassErrors] = useState({
        confirmPassword: {
            valid: true,
            text: ""
        }
    });
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);



    const setEmail = (e) => {
        setEmailValue(e.target.value);
        setErrors(formValidationLogin(e.target.value, "email"));

    };

    const setPassword = (e) => {
        pass = e.target.value;
        setPasswordValue(e.target.value);
        setPassErrors(signupValidation(e.target.value));

    };
    const setConfirmPassword = (e) => {
        setConfirmValue(e.target.value);
        setPassErrors(signupValidation(pass, e.target.value ));

    };

    const handleSubmit = (e) => {
        e.preventDefault();

     if(!passErrors.confirmPassword.valid !== false){
     return;
     }
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((response) => {
                const { user } = response;

                saveUser(user, navigate);

            })
            .catch((error) => {
                console.log(error);
            });
        setSuccess(true);
        setOpen(true);
        resetForm();

    };


    const resetForm = () => {
        setEmailValue("");
        setPasswordValue("");
        setConfirmValue("");
    };



    return (
        <>
            <div className="login-page">
                {success && open &&  <FlashMessage />}

                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}

                    className="register-form"
                >
                    <h2 className="title">Sign up</h2>
                    <div className="flex">
                        <div className="form-group">
                            <label className="register-label">Email
                            <TextField fullWidth
                                       type="email"
                                       className="form-control"
                                       id="inputEmail"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter email"
                                       value={emailValue}
                                       onChange={setEmail}
                                       required
                            />
                            </label>
                        </div>
                        {!errors.email.valid &&   <p className="error-log">{errors.email.text}</p>}
                        <div className="form-group">
                            <label className="register-label">Password
                            <TextField fullWidth
                                       type="password"
                                       autoComplete="new-password"
                                       className="form-control"
                                       id="inputPassword"
                                       placeholder="Enter Password"
                                       value={passwordValue}
                                       onChange={setPassword}
                                       required
                            />
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="register-label">Confirm Password
                                <TextField fullWidth
                                           name="passwordConfirm"
                                           type="password"
                                           autoComplete="new-password"
                                           className="form-control"
                                           id="confirm_password"
                                           placeholder="Enter Password"
                                           value={confirmValue}
                                           onChange={setConfirmPassword}
                                           required
                                />
                            </label>
                        </div>
                        { !passErrors.confirmPassword.valid &&  <p className="error-log">{passErrors.confirmPassword.text}</p>}
                        <Button variant="contained"   type="submit" className="btn-signup btn">
                            Sign up
                        </Button>

                    </div>
                </form>

            </div>
        </>
    );
}