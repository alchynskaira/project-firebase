import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import {formValidationLogin} from "./formValidation";
import {useNavigate} from "react-router-dom";
import {auth} from "../../index";
import {signInWithEmailAndPassword} from "firebase/auth";
import {saveUser} from "../../helpers/saveUser";
import AlertMessage from "../alert/AlertMessage";
import { useAlertContext } from "../../helpers/alertContextProvider";
import "./Login.css";
import {createStyles, makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) =>
    createStyles({
        loginLabel: {
            marginBottom:"5px",
        },
        formControlLog: {
            marginTop: "5px",
            marginBottom: "5px"
        },
        formGroupLog: {
            marginBottom: "10px",
        },
    })
);


export function LoginForm() {
    const classes = useStyles();
    let navigate = useNavigate();
    const { showAlert } = useAlertContext();
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
                showAlert('success', 'You are successfully logged in!');
                navigate("/home");
            })
            .catch((error) => {
                showAlert('error', 'You are not logged in, password or email is wrong!');
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
                <AlertMessage  />
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="login-form"
                >
                    <h2 className="title">Log in</h2>
                    <div className="flex">
                        <div className={classes.formGroupLog}>
                            <label className={classes.loginLabel}>Email
                                <TextField fullWidth
                                           type="email"
                                           className={classes.formControlLog}
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
                        <div className={classes.formGroupLog}>
                            <label className={classes.loginLabel}>Password
                                <TextField fullWidth
                                           type="password"
                                           autoComplete="new-password"
                                           className={classes.formControlLog}
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
                            <a href=""  type="submit" className="link-signup btn"
                               onClick={(e)=> {
                                navigate('/register')
                            }}>
                                Sign up
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}