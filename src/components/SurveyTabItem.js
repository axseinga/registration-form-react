import React from "react";
import StyledSurveyTabItem from "./styled/SurveyTabItem.styled";

const SurveyTabItem = (props) => {
    return (
        <StyledSurveyTabItem active={props.active} disabled={props.disabled}>
            <a href="#">{props.children}</a>
        </StyledSurveyTabItem>
    );
};

export default SurveyTabItem;