import React from "react";
import StyledSurveyProgressBar from "./styled/SurveyProgressBar.styled";

const SurveyProgressBar = (props) => {
    const percent = () => {
        if (props.currStep === 1) {
            const percent = 2;
            return percent;
        }
        if (props.currStep === 2) {
            const percent = 4;
            return percent;
        }
        if (props.currStep === 3) {
            const percent = 6;
            return percent;
        }
        if (props.currStep === 4) {
            const percent = 7;
            return percent;
        }
        if (props.currStep === 5) {
            const percent = 8;
            return percent;
        }
        if (props.currStep === 6) {
            const percent = 9;
            return percent;
        }
        if (props.currStep === 7) {
            const percent = 10;
            return percent;
        } else return;
    };
    const percentValue = percent();
    return (
        <StyledSurveyProgressBar percent={percentValue}>
            <div></div>
        </StyledSurveyProgressBar>
    );
};

export default SurveyProgressBar;
