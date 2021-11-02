import React, { useState, useReducer } from "react";
import StyledSurvey from "./styled/Survey.styled";
import SurveyTabs from "./SurveyTabs";
import SurveyContent from "./SurveyContent";
import SurveyProgressBar from "./SurveyProgressBar";
import validate from "./FormValidation";

const Survey = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const fields = {
        name: { value: "", hasError: true, error: "", touched: false },
        surname: { value: "", hasError: true, error: "", touched: false },
        email: { value: "", hasError: true, error: "", touched: false },
        username: { value: "", hasError: true, error: "", touched: false },
        password: { value: "", hasError: true, error: "", touched: false },
        secondPassword: {
            value: "",
            hasError: true,
            error: "",
            touched: false,
        },
        plantsAmount: { value: "", hasError: true, error: "", touched: false },
        plantsFavourites: {
            cacti: false,
            aroids: false,
            marantas: false,
            begonias: false,
            alocasias: false,
            palms: false,
            ferns: false,
            orchids: false,
            hasError: false,
        },
        rules: {
            rule1: false,
            rule2: false,
            rule3: false,
            rule4: false,
            hasError: true,
            error: "",
            touched: false,
        },
        isFormValid: false,
    };

    /* 

    {
    type: 'UPDATE_iSTOUCHED',
    type: 'UPDATE_HASERROR',
    type: 'UPDATE_ERROR',
}

    */

    const reducer = (state, action) => {
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
                        value: action.name,
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
            default:
                return state;
        }
    };

    const [userInput, dispatch] = useReducer(reducer, fields);

    const nextStep = () => {
        let curr = currentStep;
        curr = curr + 1;
        setCurrentStep(curr);
    };

    const prevStep = () => {
        let curr = currentStep;
        curr = curr - 1;
        setCurrentStep(curr);
    };

    const handleChangeStep = (step) => {
        setCurrentStep(step);
    };

    const handleChange = (name, value, value2) => {
        const { hasError, error } = validate(name, value, value2);
        dispatch({
            type: "UPDATE_ERRORS",
            name: name,
            hasError: hasError,
            error: error,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
    };

    return (
        <StyledSurvey>
            <section>
                <h1>
                    Welcome to houseplants lovers forum! Please fill in
                    registration form to continue.
                </h1>
                <SurveyTabs
                    handleChangeStep={handleChangeStep}
                    currStep={currentStep}
                />
                <SurveyContent
                    handleSubmit={handleSubmit}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    currentStep={currentStep}
                    dispatch={dispatch}
                    plantsState={userInput}
                    handleChange={handleChange}
                ></SurveyContent>
                <div className="ProgressBarContainer">
                    <SurveyProgressBar />
                </div>
            </section>
        </StyledSurvey>
    );
};

export default Survey;
