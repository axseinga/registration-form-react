import React, { useState, useReducer, useEffect } from "react";
import StyledSurvey from "./styled/Survey.styled";
import SurveyTabs from "./SurveyTabs";
import SurveyContent from "./SurveyContent";
import SurveyProgressBar from "./SurveyProgressBar";
import validate from "./FormValidation";
import { fields, reducer } from "./reducer";

const Survey = () => {
    const [currentStep, setCurrentStep] = useState(1);

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

    const handleChange = (name, value, value2, state) => {
        const { hasError, error } = validate(name, value, value2, state);
        dispatch({
            type: "UPDATE_ERRORS",
            name: name,
            hasError: hasError,
            error: error,
        });
    };

    const onFocusOut = (name, touched) => {
        dispatch({
            type: "UPDATE_TOUCHED",
            name: name,
            touched: touched,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = [];
        Object.entries(userInput).forEach(([key, value]) => {
            if (value.hasError === true) {
                errors.push(value.error);
                dispatch({
                    type: "UPDATE_TOUCHED",
                    name: key,
                    touched: true,
                });
            }
        });
        if (errors !== []) {
            alert(
                "Form has errors. Please check all fields carefully for error messages and correct them."
            );
            console.log("form has errors");
        } else {
            alert(
                `Thank you for your registration. The email was sent to ${userInput.email.value}`
            );
            setTimeout(() => {
                dispatch(
                    {
                        type: "UPDATE_ERRORS",
                    },
                    1000
                );
            });
        }
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
                    onFocusOut={onFocusOut}
                ></SurveyContent>
                <div className="ProgressBarContainer">
                    <SurveyProgressBar currStep={currentStep} />
                </div>
            </section>
        </StyledSurvey>
    );
};

export default Survey;
