import React, { useState, useReducer } from "react";
import StyledSurvey from "./styled/Survey.styled";
import SurveyTabs from "./SurveyTabs";
import SurveyContent from "./SurveyContent";
import useInputState from "./hooks/useInputState";

const Survey = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const fields = {
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        secondPassword: "",
    };

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({
            ...state,
            newState,
        }),
        fields
    );

    /*const [name, setName] = useInputState("");
    const [surname, setSurname] = useInputState("");
    const [email, setEmail] = useInputState("");
    const [username, setUsername] = useInputState("");
    const [password, setPassword] = useInputState("");
    const [passwordSecond, setPasswordSecond] = useInputState("");*/

    const handleChange = (e) => {
        const name = e.target.name;
        const newValue = e.target.value;
        setUserInput({ [name]: newValue });
    };

    const nextStep = () => {
        let curr = currentStep;
        curr = curr >= 2 ? 3 : curr + 1;
        console.log(curr);
        setCurrentStep(curr);
    };

    const prevStep = () => {
        let curr = currentStep;
        curr = curr <= 1 ? 1 : curr - 1;
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
                <SurveyTabs handleChangeStep={handleChangeStep} />
                <SurveyContent
                    onSubmit={handleSubmit}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    currentStep={currentStep}
                    /*name={name}
                    setName={setName}
                    surname={surname}
                    setSurname={setSurname}
                    email={email}
                    setEmail={setEmail}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    passwordSecond={passwordSecond}
                    setPasswordSecond={setPasswordSecond}*/
                    handleChange={handleChange}
                    userInput={userInput}
                />
            </section>
            {/*} <div>progress bar</div>*/}
        </StyledSurvey>
    );
};

export default Survey;
