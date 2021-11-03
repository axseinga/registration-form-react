export default function validate(name, value, value2) {
    let hasError = false;
    let error = "";
    switch (name) {
        case "name":
            if (!value) {
                hasError = true;
                error = "Name is required";
            } else if (!/^[a-z ,.'-]+$/i.test(value)) {
                hasError = true;
                error = "Invalid name";
            } else {
                hasError = false;
                error = "";
            }
            break;
        case "surname":
            if (!value) {
                hasError = true;
                error = "Surname is required";
            } else if (!/^[a-z ,.'-]+$/i.test(value)) {
                hasError = true;
                error = "Invalid surname";
            } else {
                hasError = false;
                error = "";
            }
            break;
        case "email": {
            if (!value) {
                hasError = true;
                error = "Email is required";
            } else if (
                !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
                    value
                )
            ) {
                hasError = true;
                error = "Invalid email";
            } else {
                hasError = false;
                error = "";
            }
            break;
        }
        case "username": {
            if (!value) {
                hasError = true;
                error = "Username is required";
            } else if (value.length < 3) {
                hasError = true;
                error = "Username has to be longer than 3 characters";
            } else if (value.length >= 17) {
                hasError = true;
                error = "Username has to be shorter than 17 characters";
            } else if (!/^[a-z0-9_-]{3,16}$/i.test(value)) {
                hasError = true;
                error = "Invalid username";
            } else {
                hasError = false;
                error = "";
            }
            break;
        }
        case "password": {
            if (!value) {
                hasError = true;
                error = "Password is required";
            } else if (value.length < 9) {
                hasError = true;
                error = "Password has to have minimum 8 characters";
            } else if (
                !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(
                    value
                )
            ) {
                hasError = true;
                error =
                    "Username has to have at least one number and one special character (!@#$%^&*)";
            } else {
                hasError = false;
                error = "";
            }
            break;
        }
        case "secondPassword": {
            if (!value) {
                hasError = true;
                error = "Password is required";
            }
            if (value !== value2) {
                hasError = true;
                error = "Password does not match";
            } else {
                hasError = false;
                error = "";
            }
            break;
        }
        case "plantsAmount": {
            if (value2.touched === false) {
                hasError = true;
                error = "Please mark one of the options";
            } else {
                hasError = false;
                error = "";
            }
            break;
        }
        case "plantsFavourites": {
            if (value2.touched === false) {
                hasError = true;
                error = "Please mark one of the options";
            } else {
                hasError = false;
                error = "";
            }
            break;
        }
        case "rules": {
            if (value2 === false) {
                hasError = true;
                error = "Please accept this rule";
            } else {
                hasError = false;
                error = "";
            }
            break;
        }
        default:
            break;
    }

    return { hasError, error };
}