import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {db} from "../../firebaseConfig";
import "./EditUserDataForm.css";
import AlertMessage from "../alert/AlertMessage";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import {useAlertContext} from "../../helpers/alertContextProvider";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {dateFormatting} from "../../helpers/dateFormatting";


const useStyles = makeStyles((theme) =>
    createStyles({
        editLabel: {
            marginBottom:"5px",
        },
        formControlEdit: {
            marginTop: "5px",
            marginBottom: "5px"
        },
        formGroupEdit: {
            marginBottom: "10px",
        },
        formDateReg: {
            width: "100%",
            height: "50px",
            marginBottom: "10px",
            marginTop: "10px"
        }
    })
);

export function EditUserDataForm({onClose, user}) {
    const classes = useStyles();
    const { showAlert } = useAlertContext();
    const [dateForDisplaying, setDateForDisplaying] = useState(dateFormatting(user.birthday?.toDate()))
    const [userUpdateData, setUserUpdateData] = useState(user);
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


    const setFormData = (key, value) => {
        setUserUpdateData({
            ...userUpdateData,
            [key]: value
        })
        if (key === "birthday") {
            console.log(dateFormatting(value))
            setDateForDisplaying(dateFormatting(value));
            console.log(dateForDisplaying, "2");
        }

    }


    function updateUser(uid) {
        db.collection('user').doc(uid).set(
            userUpdateData
        ).then( () => {
            showAlert('success', 'User successfully updated');
        }).catch((error) => {
            showAlert("error", "User data is not updated!");
            console.log(error.message);
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("userData"));
        if (user.uid) {
            updateUser(user.uid);
        }
        showAlert('success', 'User successfully updated');
        onClose();

    }

    return (
        <>
            <AlertMessage />
            <div className="update-page">
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="register-form"
                >
                    <h2 className="title">Edit User Data</h2>
                    <div className="flex">
                        <div className={classes.formGroupEdit}>
                            <label className={classes.editLabel}>Name
                                <TextField fullWidth
                                           type="text"
                                           autoComplete="off"
                                           className={classes.formControlEdit}
                                           id="name"
                                           placeholder="Edit your name"
                                           value={userUpdateData.name}
                                           onChange={(e) => setFormData("name", e.target.value)}
                                />
                            </label>
                        </div>
                        {!errors.name.valid && <p className="error">{errors.name.text}</p>}
                        <div className={classes.formGroupEdit}>
                            <label className={classes.editLabel}>Birthday
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        views={["year", "month", "day"]}
                                        format={'DD/MM/YYYY'}
                                        value={dateForDisplaying}
                                        KeyboardButtonProps={{"aria-label": "change date"}}
                                        onChange={(data) => setFormData("birthday", data)}
                                        renderInput={(params) =>
                                            <TextField type="date" {...params} className={classes.formDateReg}/>}
                                      />
                                </LocalizationProvider>
                            </label>
                        </div>
                        {!errors.birthday.valid && <p className="error">{errors.birthday.text}</p>}
                        <div className={classes.formGroupEdit}>
                            <label className={classes.editLabel}>Profession
                                <TextField fullWidth
                                           name="profession"
                                           type="text"
                                           autoComplete="off"
                                           className={classes.formControlEdit}
                                           id="profession"
                                           placeholder="Edit your profession"
                                           value={userUpdateData.profession}
                                           onChange={(e) => setFormData("profession", e.target.value)}
                                />
                            </label>
                        </div>
                        {!errors.profession.valid && <p className="error">{errors.profession.text}</p>}
                        <Button variant="contained" size="large" type="submit" className="btn-edit button">
                            Update
                        </Button>
                    </div>
                </form>

            </div>
        </>
    );
}