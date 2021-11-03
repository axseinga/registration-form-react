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
                onChange={(e) => {
                    props.dispatch({
                        type: props.action,
                        name: props.name,
                        newValue: e.target.value,
                        newFav: !props.isChecked,
                    });
                    props.handleChange(props.name, e.target.value, props.value);
                }}
                onBlur={() => props.onFocusOut(props.name, true)}
                checked={props.isChecked}
            ></input>
            {props.state[props.name].touched &&
                props.state[props.name].hasError && (
                    <span>{props.state[props.name].error}</span>
                )}
        </StyledSurveyInput>
    );
};

export default SurveyInput;
