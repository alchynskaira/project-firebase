
import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {db} from "../helpers/firebase/firebaseConfig";
import {profileValidationForm} from "../login/formValidation";
import "./EditUserDataForm.css";

const INITIAL_FORM_VALUES = {
    name: "",
    birthday: "",
    profession: "",
}

export function EditUserDataForm({onClose}) {

    const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState({
        name: {
            valid: true,
            text: ""
        },
        birthday: {
            valid: true,
            text: ""
        },
        profession: {
            valid: true,
            text: ""
        }
    });



    function updateUser(id, arr) {
        const user = JSON.parse(localStorage.getItem( "userData"));
        console.log(user);
        if(user) {
            let userData = {
                name: arr.name,
                birthday: arr.birthday,
                profession: arr.profession
            };
            db.collection('user').doc(user.id).set(userData)


        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        updateUser("nNKpHpEVaAWnGJt4Xjih", formValues);

        onClose();
    }

    const changeField = (field, value) => {
        setFormValues({
            ...formValues,
            [field]:value,
        });
        console.log(value)
     setErrors(profileValidationForm(field, value))

    }

    const resetForm = () => {
        setFormValues(INITIAL_FORM_VALUES);
    };

    return (
        <>
            <div className="login-page">
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="register-form"
                >
                    <h2 className="title">Edit User Data</h2>
                    <div className="flex">
                        <div className="form-group">
                            <label className="update-label">Name
                                <TextField fullWidth
                                           type="text"
                                           autoComplete="off"
                                           className="form-control"
                                           id="name"
                                           placeholder="Edit your name"
                                            value={formValues.name}
                                            onChange={(e)=> changeField("name", e.target.value)}
                                />
                            </label>
                        </div>
                        {!errors.name.valid && <p className="error">{errors.name.text}</p>}
                        <div className="form-group">
                            <label className="update-label">Birthday
                                <TextField fullWidth
                                           type="text"
                                           autoComplete="off"
                                           className="form-control"
                                           id="birthday"
                                           placeholder="Edit the day of birth"
                                            value={formValues.birthday}
                                           onChange={(e)=> changeField("birthday", e.target.value)}
                                           required
                                />
                            </label>
                        </div>
                        {!errors.birthday.valid && <p className="error">{errors.birthday.text}</p>}
                        <div className="form-group">
                            <label className="update-label">Profession
                                <TextField fullWidth
                                           name="profession"
                                           type="text"
                                           autoComplete="off"
                                           className="form-control"
                                           id="profession"
                                           placeholder="Edit your profession"
                                            value={formValues.profession}
                                           onChange={(e)=> changeField("profession", e.target.value)}
                                           required
                                />
                            </label>
                        </div>
                        {!errors.profession.valid && <p className="error">{errors.profession.text}</p>}
                        <Button variant="contained"   type="submit" className="btn-signup btn">
                            Update
                        </Button>
                    </div>
                </form>

            </div>
        </>
    );
}