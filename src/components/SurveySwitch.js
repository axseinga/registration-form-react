import React from "react";
import StyledSurveySwitch from "./styled/SurveySwitch.styled";
import validate from "./FormValidation";

const SurveySwitch = (props) => {
    /*const exempt = (name, value, value2) => {
        console.log(value2);
        const { hasError, error } = validate(name, value, value2);
        console.log(name, value);
        props.dispatch({
            type: "UPDATE_EXEMPTIONS",
            name: name,
            newValue: props.name,
            boleean: value,
            hasError: hasError,
            error: error,
        });
        console.log(value2);
    };*/

    const exempt = (e, name, value, value2) => {
        props.dispatch({
            type: props.action,
            name: props.name,
            newValue: e.target.value,
            new: !props.isChecked,
        });
        const { hasError, error } = validate(name, value, value2);
        props.dispatch({
            type: "UPDATE_ERRORS",
            name: name,
            hasError: hasError,
            error: error,
        });
    };
    return (
        <StyledSurveySwitch>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value}
                onClick={() => props.onFocusOut(props.field, true)}
                onChange={(e) => {
                    exempt(e, "rules", !props.isChecked, props.state);
                    /*props.dispatch({
                        type: props.action,
                        name: props.name,
                        newValue: e.target.value,
                        new: !props.isChecked,
                    });
                    props.handleChange("rules", !props.isChecked, props.state);*/
                }}
                checked={props.isChecked}
            ></input>
            <label htmlFor={props.name}>{props.children} </label>
        </StyledSurveySwitch>
    );
};

export default SurveySwitch;
