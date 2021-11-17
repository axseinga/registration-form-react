const initFields = () => {
    const basicFields = [
        "name",
        "surname",
        "email",
        "username",
        "password",
        "secondPassword",
    ];
    const data = {};
    basicFields.forEach((name) => {
        data[name] = {
            value: "",
            hasError: true,
            error: "Please fill in this field",
            touched: false,
        };
    });
    const extraFields = ["plantsAmount", "plantsFavourites", "rules"];
    extraFields.forEach((name) => {
        data[name] = {
            hasError: true,
            touched: false,
            error: "Please mark one of the options",
        };
    });
    data.plantsAmount.value = "";
    const plants = [
        "cacti",
        "aroids",
        "marantas",
        "begonias",
        "alocasias",
        "palms",
        "ferns",
        "orchids",
    ];
    plants.forEach((plant) => {
        data.plantsFavourites[plant] = false;
    });
    const rules = ["rule1", "rule2", "rule3", "rule4"];
    rules.forEach((rule) => {
        data.rules[rule] = false;
    });
    data.rules.error = "Please accept all the rules";
    return data;
};

export const fields = initFields();

export const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_VALUE":
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    value: action.newValue,
                },
            };
        case "UPDATE_AMOUNT":
            return {
                ...state,
                plantsAmount: {
                    ...state.plantsAmount,
                    value: action.newValue,
                },
            };
        case "UPDATE_FAV":
            return {
                ...state,
                plantsFavourites: {
                    ...state.plantsFavourites,
                    [action.name]: action.newFav,
                },
            };
        case "UPDATE_RULES":
            return {
                ...state,
                rules: {
                    ...state.rules,
                    [action.name]: action.new,
                },
            };
        case "UPDATE_ERRORS":
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    hasError: action.hasError,
                    error: action.error,
                },
            };
        case "UPDATE_TOUCHED":
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    touched: action.touched,
                },
            };
        case "UPDATE_EXEMPTIONS":
            return {
                ...state,
                [action.name]: {
                    ...state[action.name],
                    [action.newValue]: action.boleean,
                    hasError: action.hasError,
                    error: action.error,
                },
            };
        case "RESET":
            return fields;
        default:
            return state;
    }
};
