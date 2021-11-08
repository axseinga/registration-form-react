import React from "react";
import StyledSurveyProgressBar from "./styled/SurveyProgressBar.styled";

const SurveyProgressBar = (props) => {
    const percents = [20, 40, 60, 70, 80, 90, 100];

    const percent = () => {
        const current = percents[props.currStep - 1];
        return current;
    };

    const percentValue = percent();
    return (
        <StyledSurveyProgressBar percent={percentValue}>
            <div></div>
        </StyledSurveyProgressBar>
    );
};

export default SurveyProgressBar;
