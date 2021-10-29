import React from "react";
import { Children } from "react";
import StyledSurveyInput from "./styled/SurveyInput.styled";
import useInputState from "./hooks/useInputState";

const SurveyInput = (props) => {
    return (
        <StyledSurveyInput>
            <label htmlFor={props.name}>{props.children} </label>
            <input
                type="text"
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={props.handleChange}
            ></input>
        </StyledSurveyInput>
    );
};

export default SurveyInput;
