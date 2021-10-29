import React from "react";
import StyledSurveyContent from "./styled/SurveyContent.styled";
import SurveyPage1 from "./SurveyPage1";
import SurveyPage2 from "./SurveyPage2";
import Button from "./Button";

const SurveyContent = (props) => {
    const currentPage = (currStep) => {
        if (currStep === 1) {
            return (
                <SurveyPage1
                    name={props.name}
                    setName={props.setName}
                    surname={props.surname}
                    setSurname={props.setSurname}
                ></SurveyPage1>
            );
        }
        if (currStep === 2) {
            return (
                <SurveyPage2
                    email={props.email}
                    setEmail={props.setEmail}
                    username={props.username}
                    setUsername={props.setUsername}
                ></SurveyPage2>
            );
        }
    };

    const previousButton = () => {
        let currentStep = props.currentStep;
        if (currentStep !== 1) {
            return <Button onClick={props.prevStep}>Prev</Button>;
        }
        return null;
    };

    const nextButton = () => {
        let currentStep = props.currentStep;
        if (currentStep < 3) {
            return <Button onClick={props.nextStep}>Prev</Button>;
        }
        return null;
    };

    return (
        <StyledSurveyContent>
            {previousButton()}
            {currentPage(props.currentStep)}
            {nextButton()}
        </StyledSurveyContent>
    );
};

export default SurveyContent;
