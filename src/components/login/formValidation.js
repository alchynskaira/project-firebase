// import {validEmail, validPassword} from "./regex";

const isValidLength = (value, minLength, maxLength) => value.length < minLength || value.length > maxLength;


const createMaxMinLengthError = (fieldName, min, max) =>
    `Form ${fieldName} should be from ${min} to ${max} letters`;

 export const formValidationLogin = (value, fieldName) => {

    const errors = {
        email: {
            valid: true,
            text: ""
        },
        password: {
            valid: true,
            text: ""
        }
    };

    if (fieldName === "email" && isValidLength(value, 1, 15)) {

        errors.email.text = createMaxMinLengthError("email", 6, 20);
        errors.email.valid = false;
    } else {
        errors.email.text = "";
        errors.email.valid = true;
    }
    if (fieldName === "password" && isValidLength(value, 1, 12)) {

        errors.password.text = createMaxMinLengthError("password", 6, 20);
        errors.password.valid = false;
    } else {
        errors.password.text = "";
        errors.password.valid = true;
    }

    return errors;
};

