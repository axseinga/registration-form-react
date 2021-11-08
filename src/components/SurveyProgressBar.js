import React from "react";
import StyledSurveyProgressBar from "./styled/SurveyProgressBar.styled";

const SurveyProgressBar = (props) => {
    console.log(props);
    const percents = [2, 4, 6, 7, 8, 9, 10];

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
