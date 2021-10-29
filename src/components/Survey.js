import React, { useState } from "react";
import StyledSurvey from "./styled/Survey.styled";
import SurveyTabs from "./SurveyTabs";
import SurveyContent from "./SurveyContent";
import useInputState from "./hooks/useInputState";

const Survey = () => {
    const [currentStep, setCurrentStep] = useState(2);
    const [name, setName] = useInputState("");
    const [surname, setSurname] = useInputState("");
    const [email, setEmail] = useInputState("");
    const [username, setUsername] = useInputState("");

    return (
        <StyledSurvey>
            <section>
                <h1>
                    Welcome to houseplants lovers forum! Please fill in
                    registration form to continue.
                </h1>
                <SurveyTabs />
                <SurveyContent
                    currentStep={currentStep}
                    name={name}
                    setName={setName}
                    surname={surname}
                    setSurname={setSurname}
                    email={email}
                    setEmail={setEmail}
                    username={username}
                    setUsername={setUsername}
                />
            </section>
            <div>progress bar</div>
        </StyledSurvey>
    );
};

export default Survey;
