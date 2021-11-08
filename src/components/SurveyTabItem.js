import React from "react";
import StyledSurveyTabItem from "./styled/SurveyTabItem.styled";

const SurveyTabItem = (props) => {
    return (
        <StyledSurveyTabItem
            key={props.tabNum}
            active={props.active}
            disabled={props.disabled}
            onClick={() => props.handleChangeStep(props.step)}
        >
            <a href="#">{props.children}</a>
        </StyledSurveyTabItem>
    );
};

export default SurveyTabItem;
