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
        const Components = [
            SurveyPage1,
            SurveyPage2,
            SurveyPage3,
            SurveyPage4,
            SurveyPage5,
            SurveyPage6,
            SurveyPage7,
        ];
        const ComponentName = Components[currStep - 1];
        return (
            <ComponentName
                dispatch={props.dispatch}
                plantsState={props.plantsState}
                handleChange={props.handleChange}
                onFocusOut={props.onFocusOut}
            />
        );
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
        <StyledSurveyContent
            onSubmit={props.handleSubmit}
            isFirstPage={props.currentStep === 1}
        >
            {currentPage(props.currentStep)}
            <div>
                {previousButton(props.prevStep)}
                {nextButton(props.nextStep)}
            </div>
        </StyledSurveyContent>
    );
};

export default SurveyContent;
