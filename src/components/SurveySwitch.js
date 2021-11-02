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
                onChange={(e) =>
                    props.dispatch({
                        type: props.action,
                        name: props.name,
                        newValue: e.target.value,
                        newFav: !props.isChecked,
                    })
                }
                checked={props.isChecked}
            ></input>
            <label htmlFor={props.name}>{props.children} </label>
        </StyledSurveySwitch>
    );
};

export default SurveySwitch;
