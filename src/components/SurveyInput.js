import React from "react";
import StyledSurveyInput from "./styled/SurveyInput.styled";

const SurveyInput = (props) => {
    const fieldName = props.name;
    return (
        <StyledSurveyInput>
            <label htmlFor={props.name}>{props.children} </label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value.fieldName}
                onChange={props.handleChange}
            ></input>
        </StyledSurveyInput>
    );
};

export default SurveyInput;
