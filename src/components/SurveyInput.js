import React from "react";
import StyledSurveyInput from "./styled/SurveyInput.styled";

const SurveyInput = (props) => {
    return (
        <StyledSurveyInput
            isradio={props.isradio}
            ischeckbox={props.ischeckbox}
            isreg={props.isreg}
        >
            <label htmlFor={props.name}>{props.children} </label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value}
                onChange={props.handleChange}
            ></input>
        </StyledSurveyInput>
    );
};

export default SurveyInput;
