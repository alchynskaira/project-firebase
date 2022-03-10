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


 // export const profileValidationForm =(fieldName,value)=> {
 //     const name = "name";
 //     const birthday = "birthday";
 //     const profession = "profession";
 //     const errors = {
 //         name: {
 //             valid: true,
 //             text: ""
 //         },
 //         birthday: {
 //             valid: true,
 //             text: ""
 //         },
 //         profession: {
 //             valid: true,
 //             text: ""
 //         },
 //     };
 //
 //         if (fieldName === name && isValidLength(value.name, 2, 30)) {
 //             errors.name.text = createMaxMinLengthError("name", 2, 30);
 //             errors.name.valid = false;
 //         }
 //         if (fieldName === birthday && isValidLength(value.birthday, 2, 20)) {
 //             errors.birthday.text = createMaxMinLengthError("birthday", 2, 20);
 //             errors.birthday.valid = false;
 //         }
 //         if (fieldName === profession && isValidLength(value.profession, 2, 30)) {
 //             errors.profession.text = createMaxMinLengthError("profession", 2, 30);
 //             errors.profession.valid = false;
 //         }
 //
 //         return errors;
 //
 // }