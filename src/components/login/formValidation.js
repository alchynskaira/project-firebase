 import {validEmail, validPassword} from "./regex";

const isValidLength = (value, minLength, maxLength) => value.length < minLength || value.length > maxLength;


const createMaxMinLengthError = (fieldName, min, max) =>
    `Form ${fieldName} should be from ${min} to ${max} letters`;



 export const formValidationLogin = (value, fieldName) => {
     const email = "email";
     const password = "password";
     const validLength = isValidLength(value, 1, 15);
     const regexEmail = !validEmail.test(value);
     const regexPassword = !validPassword.test(value);

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

    if (fieldName === email && validLength && regexEmail) {

        errors.email.text = createMaxMinLengthError("email", 6, 20);
        errors.email.valid = false;

    } else {

        errors.email.valid = true;

    }
    if (fieldName === password && validLength && regexPassword) {

        errors.password.text = createMaxMinLengthError("password", 6, 20);
        errors.password.valid = false;

    } else {

        errors.password.valid = true;

    }

    return errors;
};

 export const signupValidation =(password, confirmPassword) => {
     console.log(password, confirmPassword);


     const errors = {
         confirmPassword: {
             valid:true,
             text: ""
         }
     };

     if (password === confirmPassword ) {
         errors.confirmPassword.text = "";
         errors.confirmPassword.valid = true;

     } else {

         errors.confirmPassword.text = "Password doesn't match";
         errors.confirmPassword.valid = false;
     }

return errors;

 };
