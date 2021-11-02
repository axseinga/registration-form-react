import React, { useState, useReducer } from "react";
import StyledSurvey from "./styled/Survey.styled";
import SurveyTabs from "./SurveyTabs";
import SurveyContent from "./SurveyContent";
import SurveyProgressBar from "./SurveyProgressBar";

const Survey = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const fields = {
        name: { value: "" },
        surname: { value: "" },
        email: { value: "" },
        username: { value: "" },
        password: { value: "" },
        secondPassword: {
            value: "",
        },
        plantsAmount: "",
        plantsFavourites: {
            cacti: false,
            aroids: false,
            marantas: false,
            begonias: false,
            alocasias: false,
            palms: false,
            ferns: false,
            orchids: false,
        },
        rules: { rule1: false, rule2: false, rule3: false, rule4: false },
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
                    [action.name]: { value: action.newValue },
                };
            case "UPDATE_AMOUNT":
                return {
                    ...state,
                    plantsAmount: action.name,
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
                    onSubmit={() => {
                        console.log("submitting");
                    }}
                    id="myForm"
                    nextStep={nextStep}
                    prevStep={prevStep}
                    currentStep={currentStep}
                    dispatch={dispatch}
                    plantsState={userInput}
                ></SurveyContent>
                <div className="ProgressBarContainer">
                    <SurveyProgressBar />
                </div>
            </section>
        </StyledSurvey>
    );
};

export default Survey;
