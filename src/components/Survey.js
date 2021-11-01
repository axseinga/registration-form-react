import React, { useState, useReducer } from "react";
import StyledSurvey from "./styled/Survey.styled";
import SurveyTabs from "./SurveyTabs";
import SurveyContent from "./SurveyContent";
import SurveyProgressBar from "./SurveyProgressBar";

const Survey = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const fields = {
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        secondPassword: "",
        plantsAmount: "",
        plantsFavourites: [],
        rules: [],
    };

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({
            ...state,
            ...newState,
        }),
        fields
    );

    const handleChange = (e) => {
        const name = e.target.name;
        const newValue = e.target.value;
        setUserInput({ [name]: newValue });
    };

    const handleChangeCheckbox = (e) => {
        const checked = e.target.checked;
        const newValue = e.target.value;
        if (checked && !userInput.plantsFavourites.includes(newValue)) {
            const newState = userInput.plantsFavourites.push(newValue);
            setUserInput((prevState) => ({
                ...prevState,
                plantsFavourites: [...newState],
            }));
        } else if (!checked && userInput.plantsFavourites.includes(newValue)) {
            console.log("unchecked clicked");
            const anotherNewState = userInput.plantsFavourites.filter(
                (fav) => fav !== newValue
            );
            /* problematyczna czesc, state sie nie updatuje*/
            console.log(anotherNewState);
            setUserInput((prevState) => ({
                ...prevState,
                plantsFavourites: [...anotherNewState],
            }));
        }
    };

    const handleChangeRules = (e) => {
        const checked = e.target.checked;
        const newValue = e.target.name;
        if (checked && !userInput.rules.includes(newValue)) {
            const newState = userInput.rules.push(newValue);
            setUserInput((prevState) => ({
                ...prevState,
                rules: [...newState],
            }));
        } else if (!checked && userInput.rules.includes(newValue)) {
            console.log("unchecked clicked");
            const anotherNewState = userInput.rules.filter(
                (rule) => rule !== newValue
            );
            /* problematyczna czesc, state sie nie updatuje*/
            console.log(anotherNewState);
            setUserInput((prevState) => ({
                ...prevState,
                rules: [...anotherNewState],
            }));
        }
    };

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
                    onSubmit={handleSubmit}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    currentStep={currentStep}
                    handleChange={handleChange}
                    handleChangeCheckbox={handleChangeCheckbox}
                    handleChangeRules={handleChangeRules}
                    userInput={userInput}
                />
                <div className="ProgressBarContainer">
                    <SurveyProgressBar />
                </div>
            </section>
        </StyledSurvey>
    );
};

export default Survey;
