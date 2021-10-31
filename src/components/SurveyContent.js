import React from "react";
import StyledSurveyContent from "./styled/SurveyContent.styled";
import SurveyPage1 from "./SurveyPage1";
import SurveyPage2 from "./SurveyPage2";
import SurveyPage3 from "./SurveyPage3";
import SurveyPage4 from "./SurveyPage4";
import SurveyPage5 from "./SurveyPage5";
import Button from "./Button";

const SurveyContent = (props) => {
    const currentPage = (currStep) => {
        if (currStep === 1) {
            return (
                <SurveyPage1
                    handleChange={props.handleChange}
                    userInput={props.userInput}
                ></SurveyPage1>
            );
        }
        if (currStep === 2) {
            return (
                <SurveyPage2
                    handleChange={props.handleChange}
                    userInput={props.userInput}
                ></SurveyPage2>
            );
        }

        if (currStep === 3) {
            return (
                <SurveyPage3
                    handleChange={props.handleChange}
                    userInput={props.userInput}
                ></SurveyPage3>
            );
        }
        if (currStep === 4) {
            return <SurveyPage4></SurveyPage4>;
        }
        if (currStep === 5) {
            return <SurveyPage5></SurveyPage5>;
        }
    };

    const previousButton = () => {
        let currentStep = props.currentStep;
        if (currentStep !== 1) {
            return <Button handleClick={props.prevStep}>Prev</Button>;
        }
        return null;
    };

    const nextButton = () => {
        let currentStep = props.currentStep;
        if (currentStep < 5) {
            return <Button handleClick={props.nextStep}>Next</Button>;
        }
        return null;
    };

    return (
        <StyledSurveyContent>
            {currentPage(props.currentStep)}
            <div>
                {previousButton(props.prevStep)}
                {nextButton(props.nextStep)}
            </div>
        </StyledSurveyContent>
    );
};

export default SurveyContent;
