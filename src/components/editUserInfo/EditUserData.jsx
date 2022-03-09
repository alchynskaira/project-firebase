
import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {db} from "../../firebaseConfig";
export function EditUserDataForm() {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [profession, setProfession] = useState("");

    const editName = (e) => {
        setName(e.target.value)
    }
    const editBirthday = (e) => {
        setBirthday(e.target.value);
    }

    const editProfession =(e) => {
        setProfession(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const userRef = db.collection("user").doc("doc");
        return userRef.update({
            name: true,
            birthday: true,
            profession: true,
        })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {

                console.error("Error updating document: ", error);
            });

        //resetForm();
    }







    const resetForm = () => {
        setName("");
        setBirthday("");
        setProfession("");
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
                                            value={name}
                                            onChange={editName}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="register-label">Birthday
                                <TextField fullWidth
                                           type="number"
                                           autoComplete="off"
                                           className="form-control"
                                           id="birthday"
                                           placeholder="Edit the day of birth"
                                            value={birthday}
                                            onChange={editBirthday}
                                           required
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="register-label">Profession
                                <TextField fullWidth
                                           name="profession"
                                           type="text"
                                           autoComplete="off"
                                           className="form-control"
                                           id="profession"
                                           placeholder="Edit your profession"
                                            value={profession}
                                            onChange={editProfession}
                                           required
                                />
                            </label>
                        </div>
                        <Button variant="contained"   type="submit" className="btn-signup btn">
                            Submit
                        </Button>

                    </div>
                </form>

            </div>
        </>
    );
}