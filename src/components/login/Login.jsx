import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import {formValidationLogin} from "./formValidation";
import  "./Login.css";

export function Login() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [errors, setErrors] = useState({email: {
            valid: true,
            text: ""
        },
        password: {
            valid: true,
            text: ""
        }});




    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);

            setErrors(formValidationLogin(e.target.value, "email")) ;



    };

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);

            setErrors(formValidationLogin(e.target.value, "password"));



    };

    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
    };

    const resetForm = () => {
        setEmailInput("");
        setPasswordInput("");
    };


    return (
        <>
            <div className="login-page">
                <form
                    autoComplete="off"
                     onSubmit={handleSubmit}
                    className="login-form"
                >
                    <h2 className="title">Log in</h2>
                    <div className="flex">
                        <div className="form-group">
                            <TextField fullWidth
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                 value={emailInput}
                                 onChange={handleEmailChange}
                            />
                        </div>
                        {!errors.email.valid &&   <p className="error-log">{errors.email.text}</p>}
                        <div className="form-group">
                            <TextField fullWidth
                                type="password"
                                autoComplete="new-password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Enter Password"
                                 value={passwordInput}
                                 onChange={handlePasswordChange}
                            />
                        </div>
                        { !errors.password.valid &&  <p className="error-log">{errors.password.text}</p>}
                        <Button variant="contained"  type="submit" className="btn-login btn">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}