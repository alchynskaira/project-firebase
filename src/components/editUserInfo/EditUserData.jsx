
import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {db} from "../../firebaseConfig";
//import {formValidationLogin, profileValidationForm} from "../login/formValidation";



const INITIAL_FORM_VALUES = {
    name: "",
    birthday: "",
    profession: "",
}

export function EditUserDataForm() {
    const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState({name: {
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


    const updateUser = (id, fieldName) => {
        const userRef = db.collection("user").doc(id);
        console.log(userRef, "userref");

          userRef.update({
            name: formValues.name,
            birthday: formValues.birthday,
            profession: formValues.profession,
        })
            .then(() => {
                console.log("Document successfully updated!");

            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });

    }




    const handleSubmit = (e) => {
        e.preventDefault();
         updateUser()



    }

    const changeField = (field, value) => {
        setFormValues({
            ...formValues,
            [field]:value,
        });
    // setErrors(profileValidationForm(field,value))

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
                            <label className="register-label">Name
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
                        {!errors.name && <p className="error">{errors.name}</p>}
                        <div className="form-group">
                            <label className="register-label">Birthday
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
                        {!errors.birthday && <p className="error">{errors.birthday}</p>}
                        <div className="form-group">
                            <label className="register-label">Profession
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
                        {!errors.profession && <p className="error">{errors.profession}</p>}
                        <Button variant="contained"   type="submit" className="btn-signup btn">
                            Submit
                        </Button>

                    </div>
                </form>

            </div>
        </>
    );
}