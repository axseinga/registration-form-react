const errorMsg = "Please fill in this field";
export const fields = {
    name: { value: "", hasError: true, error: errorMsg, touched: false },
    surname: { value: "", hasError: true, error: errorMsg, touched: false },
    email: { value: "", hasError: true, error: errorMsg, touched: false },
    username: {
        value: "",
        hasError: true,
        error: errorMsg,
        touched: false,
    },
    password: {
        value: "",
        hasError: true,
        error: errorMsg,
        touched: false,
    },
    secondPassword: {
        value: "",
        hasError: true,
        error: errorMsg,
        touched: false,
    },
    plantsAmount: {
        value: "",
        hasError: true,
        error: "Please mark one of the options",
        touched: false,
    },
    plantsFavourites: {
        cacti: false,
        aroids: false,
        marantas: false,
        begonias: false,
        alocasias: false,
        palms: false,
        ferns: false,
        orchids: false,
        hasError: true,
        error: "Please mark one of the options",
        touched: false,
    },
    rules: {
        rule1: false,
        rule2: false,
        rule3: false,
        rule4: false,
        hasError: true,
        error: "Please accept all the rules",
        touched: false,
    },
};

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
        case "RESET":
            return fields;
        default:
            return state;
    }
};
