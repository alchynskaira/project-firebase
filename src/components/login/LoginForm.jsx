import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import {formValidationLogin} from "./formValidation";
import {useNavigate} from "react-router-dom";
import {auth} from "../../index";
import {signInWithEmailAndPassword} from "firebase/auth";
//import PersonIcon from "@mui/icons-material/Person";
import "./Login.css";
import {saveUser} from "../helpers/saveUser";


export function LoginForm() {
    let navigate = useNavigate();
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [errors, setErrors] = useState({
        email: {
            valid: true,
            text: ""
        },
        password: {
            valid: true,
            text: ""
        }
    });


    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
        setErrors(formValidationLogin(e.target.value, "email"));

    };

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
        setErrors(formValidationLogin(e.target.value, "password"));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((response) => {
                const {user} = response;

                saveUser(user);
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
            });

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
                            <label className="login-label">Email
                                <TextField fullWidth
                                           type="email"
                                           className="form-control"
                                           id="inputEmail"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter email"
                                           value={emailInput}
                                           onChange={handleEmailChange}
                                           required
                                />
                            </label>
                        </div>
                        {!errors.email.valid && <p className="error-log">{errors.email.text}</p>}
                        <div className="form-group">
                            <label className="login-label">Password
                                <TextField fullWidth
                                           type="password"
                                           autoComplete="new-password"
                                           className="form-control"
                                           id="inputPassword"
                                           placeholder="Enter Password"
                                           value={passwordInput}
                                           onChange={handlePasswordChange}
                                           required
                                />
                            </label>
                        </div>
                        {!errors.password.valid && <p className="error-log">{errors.password.text}</p>}

                        <Button variant="contained" type="submit" className="btn-login btn">
                            Submit
                        </Button>
                        <div className="register-box">
                            <a href="/register" variant="contained" type="submit" className="link-signup btn">
                                Sign up
                                {/*< PersonIcon className="user-icon"/>*/}
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}