import React from "react";
import StyledSurveySwitch from "./styled/SurveySwitch.styled";

const SurveySwitch = (props) => {
    const fieldName = props.name;
    return (
        <StyledSurveySwitch>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value.fieldName}
                onChange={props.handleChange}
            ></input>
            <label htmlFor={props.name}>{props.children} </label>
        </StyledSurveySwitch>
    );
};

export default SurveySwitch;
