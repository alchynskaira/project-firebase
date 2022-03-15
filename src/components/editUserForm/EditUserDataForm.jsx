
import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {db} from "../helpers/firebase/firebaseConfig";
import {profileValidationForm} from "../login/formValidation";
import "./EditUserDataForm.css";
import {saveUser} from "../helpers/saveUser";
import {FlashMessage} from "../helpers/alert/FlashMessage";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";

const INITIAL_FORM_VALUES = {
    name: "",
    birthday: new Date(),
    profession: "",
}

export function EditUserDataForm({onClose}) {

    //const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
    const [name, setName] =useState("");
    const [profession, setProfession] =useState("")
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [success, setSuccess] = useState(false);
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

const handleName = (e) => {
    setName(e.target.value);
}
const handleProfession = (e) => {
    setProfession(e.target.value);
}

    function updateUser(uid) {

        db.collection('user').doc(uid).set({
            name: name,
            birthday: [dateOfBirth],
            profession: profession
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem( "userData"));
        if(user.uid){
            updateUser(user.uid)
        }
        setSuccess(true);
        //resetForm()
        onClose();
    }
    //
    // const changeField = (field, value) => {
    //     setFormValues({
    //         ...formValues,
    //         [field]:value,
    //     });
    //  setErrors(profileValidationForm(field, value));
    //
    // }
    //
    // const resetForm = () => {
    //     setFormValues(INITIAL_FORM_VALUES);
    // };

    return (
        <>
            <div className="update-page">
                {success && <FlashMessage />}
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
                                            value={name}
                                            onChange={ handleName}
                                />
                            </label>
                        </div>
                        {!errors.name.valid && <p className="error">{errors.name.text}</p>}
                        <div className="form-group">
                            <label className="register-label">Birthday
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        value={dateOfBirth}
                                        KeyboardButtonProps={{"aria-label": "change date" }}
                                        onChange={(dateOfBirth)=> setDateOfBirth(dateOfBirth)
                                        }
                                        renderInput={(params) =>
                                            <TextField {...params} className= "date-input"   />}
                                     date="mm/dd/yy"/>
                                </LocalizationProvider>
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
                                            value={profession}
                                           onChange={handleProfession}
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