import React from "react";
import StyledSurveySwitch from "./styled/SurveySwitch.styled";

const SurveySwitch = (props) => {
    console.log(props.state);
    return (
        <StyledSurveySwitch>
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
                        new: !props.isChecked,
                    });
                    props.handleChange("rules", !props.isChecked, props.name);
                }}
                checked={props.isChecked}
            ></input>
            <label htmlFor={props.name}>{props.children} </label>
            {props.state[props.name].touched &&
                props.state[props.name].hasError && (
                    <span>{props.state[props.name].error}</span>
                )}
        </StyledSurveySwitch>
    );
};

export default SurveySwitch;
