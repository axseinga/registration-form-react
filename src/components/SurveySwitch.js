import React from "react";
import StyledSurveySwitch from "./styled/SurveySwitch.styled";

const SurveySwitch = (props) => {
    return (
        <StyledSurveySwitch>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value}
                onClick={() => props.onFocusOut(props.field, true)}
                onChange={(e) => {
                    props.dispatch({
                        type: props.action,
                        name: props.name,
                        newValue: e.target.value,
                        new: !props.isChecked,
                    });
                    props.handleChange("rules", !props.isChecked, props.state);
                }}
                checked={props.isChecked}
            ></input>
            <label htmlFor={props.name}>{props.children} </label>
        </StyledSurveySwitch>
    );
};

export default SurveySwitch;
