import React from "react";
import StyledSurveyContent from "./styled/SurveyContent.styled";
import SurveyPage1 from "./SurveyPage1";
import SurveyPage2 from "./SurveyPage2";
import SurveyPage3 from "./SurveyPage3";
import SurveyPage4 from "./SurveyPage4";
import SurveyPage5 from "./SurveyPage5";
import SurveyPage6 from "./SurveyPage6";
import SurveyPage7 from "./SurveyPage7";
import Button from "./Button";

const SurveyContent = (props) => {
    const currentPage = (currStep) => {
        if (currStep === 1) {
            return <SurveyPage1 dispatch={props.dispatch}></SurveyPage1>;
        }
        if (currStep === 2) {
            return <SurveyPage2 dispatch={props.dispatch}></SurveyPage2>;
        }

        if (currStep === 3) {
            return <SurveyPage3 dispatch={props.dispatch}></SurveyPage3>;
        }
        if (currStep === 4) {
            return (
                <SurveyPage4
                    dispatch={props.dispatch}
                    plantsFavState={props.plantsState.plantsAmount}
                ></SurveyPage4>
            );
        }
        if (currStep === 5) {
            return (
                <SurveyPage5
                    dispatch={props.dispatch}
                    plantsFavState={props.plantsState}
                ></SurveyPage5>
            );
        }
        if (currStep === 6) {
            return (
                <SurveyPage6
                    dispatch={props.dispatch}
                    plantsFavState={props.plantsState}
                ></SurveyPage6>
            );
        }
        if (currStep === 7) {
            return <SurveyPage7></SurveyPage7>;
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
        if (currentStep < 7) {
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
