import React from "react";
import StyledSurveyInput from "./styled/SurveyInput.styled";

const SurveyInputChecks = (props) => {
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
                onClick={() => props.onFocusOut(props.field, true)}
                onChange={(e) => {
                    props.dispatch({
                        type: props.action,
                        name: props.name,
                        newValue: props.name,
                        newFav: !props.isChecked,
                    });
                    props.handleChange(
                        props.field,
                        e.target.value,
                        props.state
                    );
                }}
                checked={props.isChecked}
            ></input>
        </StyledSurveyInput>
    );
};

export default SurveyInputChecks;
