export default function validate(name, value, value2, state) {
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
            hasError = false;
            error = "";
            break;
        }
        case "plantsFavourites": {
            const currState = { ...state, [value2]: !state.cacti };
            Object.values(currState).some((value) => value === true);
            if (
                currState.cacti !== false ||
                currState.alocasias !== false ||
                currState.aroids !== false ||
                currState.begonias !== false ||
                currState.ferns !== false ||
                currState.marantas !== false ||
                currState.orchids !== false ||
                currState.palms !== false
            ) {
                hasError = false;
                error = "";
            } else {
                hasError = true;
                error = "Please mark one of the options";
            }
            break;
        }
        case "rules": {
            console.log(state[value2]);
            const currState = { ...state, [value2]: !state[value2] };
            Object.values(currState).some((value) => value === true);
            console.log(currState);
            if (
                currState.rule1 === false ||
                currState.rule2 === false ||
                currState.rule3 === false ||
                currState.rule4 === false
            ) {
                hasError = true;
                error = "Please accept all the rules";
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
